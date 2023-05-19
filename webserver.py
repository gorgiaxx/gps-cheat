from flask import Flask, send_from_directory
from gevent import pywsgi
from flask_restful import reqparse, Api, Resource, request
import urllib.request
import json
import socket
import os
import sys
import subprocess
import signal
import time
import threading
from datetime import datetime
from datetime import timedelta
from kml2GGA import generateECEF, generateGGA
from gnuradio_transfer import gnuradio_transfer

app = Flask(__name__)
api = Api(app)

# 实时选择速度，重置路径
# 设置开始时间后，重置路径
# 路径分段列表

# webserver的作用，重置路径，下发数据，运行前端页面

# 前端作用，根据速度，轨迹路线，计算时间，发到后端

SDRonline = False
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
transfer_p = None
generator_p = None
grc_transfer_p = None
run_transter = False
run_generator = False
SDRmode = ''
gps_datetime = None
samp_rate = 2600000
bandwidth = 2500000
fake_time = ''

cur_dir = os.path.abspath('.')
print(cur_dir)
tracks_path = cur_dir + '/tracks'
ecef_path = cur_dir + '/ecef'

def _escape_param(param):
    characters = ['\\', '=', '$', '>', '<', '&', ' ',
                    '(', ')', '{', '}', ';', "'", '"', '`', '&', '|', '!', '#', '~']
    for c in characters:
        param = param.replace(c, "\\" + c)
    return param

class DivingDirection(Resource):
    def put(self):
        return {}, 200

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('origin', type=str, required=True, help='起始座标')
        parser.add_argument('destination', type=str,
                            required=True, help='结束座标')
        args = parser.parse_args()
        url = 'http://api.map.baidu.com/direction/v2/driving?origin={}&destination={}&alternatives=1&ak=34430619c31d50da34793e0df057d60b'.format(
            args['origin'], args['destination'])
        req = urllib.request.Request(url, method='GET')
        response = urllib.request.urlopen(req)
        ret = json.loads(response.read().decode())
        print(ret)
        return ret, 201

    def get(self):
        return {}, 200

    def delete(self, item_id):
        json_data = request.get_json(force=True)
        print(json_data)
        return {}, 204


class Track(Resource):

    def post(self):
        json_data = request.get_json(force=True)
        print(json_data['name'], json_data['data'])
        with open(_escape_param(tracks_path + '/' + json_data['name']), 'w') as f:
            f.write(json.dumps(json_data['data']))
            f.close()
        return json_data['data'], 200

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=False, help='轨迹名称', location='args')
        args = parser.parse_args()
        if args['name'] == None:
            cur_list = os.listdir(tracks_path)
            file_list = []
            for f in cur_list:
                file_path = os.path.join(tracks_path, f)
                if os.path.isfile(file_path):
                    file_list.append({
                        "file_name": f,
                        "file_size": os.path.getsize(file_path),
                        "modify_time": time.ctime(os.path.getmtime(file_path))
                    })
            return file_list, 200
        else:
            file_path = os.path.join(tracks_path, args['name'])
            file_data = open(file_path, 'r').read()
            return json.loads(file_data), 200

    def delete(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=False,
                            help='轨迹名称')
        args = parser.parse_args()
        if args['name'] == None:
            cur_list = os.listdir(tracks_path)
            file_list = []
            for f in cur_list:
                file_path = os.path.join(tracks_path, f)
                os.remove(file_path)
            return [], 200
        else:
            file_path = os.path.join(tracks_path, args['name'])
            os.remove(file_path)
            return [], 200

class SDR(Resource):
    def get(self):
        return {"online": SDRonline, "transmitting": run_transter}, 200

    def put(self):
        global transfer_p, grc_transfer_p, generator_p, run_transter, run_generator, gps_datetime
        if run_transter:
            run_transter = False
            if transfer_p:
                transfer_p.send_signal(signal.SIGINT)
                transfer_p.send_signal(signal.SIGTERM)
                transfer_p.wait()
            if grc_transfer_p:
                grc_transfer_p.stop()
                grc_transfer_p.wait()
            if run_generator:
                run_generator = False
                if generator_p:
                    generator_p.send_signal(signal.SIGINT)
                    generator_p.send_signal(signal.SIGTERM)
                    generator_p.wait()
        return [], 200

    def post(self):
        global transfer_p, grc_transfer_p, generator_p, run_transter, run_generator, gps_datetime
        parser = reqparse.RequestParser()
        if SDRonline:
            parser.add_argument('lng', type=str, required=False, help='经度')
            parser.add_argument('lat', type=str, required=False, help='维度')
            parser.add_argument('h', type=str, required=False, help='高度')
            parser.add_argument('realtime', type=bool, required=False, help='高度')
            parser.add_argument('name', type=str, required=False, help='高度')
            args = parser.parse_args()
            if args['realtime'] == None:
                location = "{},{},{}".format(
                    args.get('lat'), args.get('lng'), args.get('h'))
                if gps_datetime == None:
                    gps_datetime = datetime.now() + timedelta(seconds=4)
                gps_datetime_str = gps_datetime.strftime("%Y/%m/%d,%H:%M:%S")
                if run_transter:
                    run_transter = False
                    if transfer_p:
                        transfer_p.send_signal(signal.SIGINT)
                        transfer_p.send_signal(signal.SIGTERM)
                        transfer_p.wait()
                    if grc_transfer_p:
                        grc_transfer_p.stop()
                        grc_transfer_p.wait()
                if run_generator:
                    run_generator = False
                    if generator_p:
                        generator_p.send_signal(signal.SIGINT)
                        generator_p.send_signal(signal.SIGTERM)
                        generator_p.wait()
                if SDRmode == 'hackrf':
                    t1 = threading.Thread(target=runIQGenerator,
                                        args=(location, gps_datetime_str))
                    t2 = threading.Thread(target=runGnuradioTransfer, args=(True,))
                elif SDRmode == 'limesdr':
                    t1 = threading.Thread(target=runIQGenerator,
                                        args=(location, gps_datetime_str))
                    t2 = threading.Thread(target=runGnuradioTransfer, args=(True,))
                elif SDRmode == 'usrp':
                    t1 = threading.Thread(target=runIQGenerator,
                                        args=(location, gps_datetime_str))
                    t2 = threading.Thread(target=runGnuradioTransfer, args=(True,))
                elif SDRmode == 'bladerf':
                    t1 = threading.Thread(target=runIQGenerator,
                                        args=(location, gps_datetime_str, "16"))
                    t2 = threading.Thread(target=runBladeRFTransfer, args=(True,))
                elif SDRmode == 'bladerf2':
                    t1 = threading.Thread(target=runIQGenerator,
                                        args=(location, gps_datetime_str, "16"))
                    t2 = threading.Thread(target=runBladeRF2Transfer, args=(True,))
                t1.deamon = True
                t2.deamon = True
                t1.start()
                t2.start()
            else:
                ecef_name = args.get('name')
                f_path = os.path.join(ecef_path, ecef_name + '.ecef')
                if gps_datetime == None:
                    gps_datetime = datetime.now() + timedelta(seconds=4)
                gps_datetime_str = gps_datetime.strftime("%Y/%m/%d,%H:%M:%S")
                if run_transter:
                    run_transter = False
                    if transfer_p:
                        transfer_p.send_signal(signal.SIGINT)
                        transfer_p.send_signal(signal.SIGTERM)
                        transfer_p.wait()
                    if generator_p:
                        generator_p.send_signal(signal.SIGINT)
                        generator_p.send_signal(signal.SIGTERM)
                        generator_p.wait()
                    if grc_transfer_p:
                        grc_transfer_p.stop()
                        grc_transfer_p.wait()
                if SDRmode == 'hackrf':
                    t1 = threading.Thread(target=runECEFGenerator,
                                        args=(f_path, gps_datetime_str))
                    t2 = threading.Thread(target=runGnuradioTransfer)
                elif SDRmode == 'limesdr':
                    t1 = threading.Thread(target=runECEFGenerator,
                                        args=(f_path, gps_datetime_str))
                    t2 = threading.Thread(target=runGnuradioTransfer)
                elif SDRmode == 'usrp':
                    t1 = threading.Thread(target=runECEFGenerator,
                                        args=(f_path, gps_datetime_str))
                    t2 = threading.Thread(target=runGnuradioTransfer)
                elif SDRmode == 'bladerf':
                    t1 = threading.Thread(target=runECEFGenerator,
                                        args=(f_path, gps_datetime_str, "16"))
                    t2 = threading.Thread(
                        target=runBladeRFTransfer)
                elif SDRmode == 'bladerf2':
                    t1 = threading.Thread(target=runECEFGenerator,
                                        args=(f_path, gps_datetime_str, "16"))
                    t2 = threading.Thread(
                        target=runBladeRF2Transfer)
                t1.deamon = True
                t2.deamon = True
                t1.start()
                time.sleep(2)
                t2.start()
                
            return {"status": "ok"}, 201
        else:
            return {"status": "offline"}, 202

class SaveECEF(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        ECEF = generateECEF(json_data['data'])
        return ECEF, 200


class SaveECEFOnServer(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        ECEF = generateECEF(json_data['data'])
        with open(_escape_param(os.path.join(ecef_path, json_data['name']) + '.ecef'), 'w') as f:
            f.write(ECEF)
            f.close()
        return [], 200


class SaveNMEA(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        # print(json_data['name'], json_data['data'])
        NMEA = generateGGA(json_data['data'])
        return NMEA, 200


class SdrConfig(Resource):
    def post(self):
        global gps_datetime, samp_rate, bandwidth
        json_data = request.get_json(force=True)
        gps_datetime = json_data["gps_time"]
        if gps_datetime == '1970-01-01 08:00:00':
            gps_datetime = None
        else:
            gps_datetime = datetime.strptime(gps_datetime, '%Y-%m-%d %H:%M:%S')
        print(gps_datetime)
        samp_rate = json_data["sampleRate"]
        bandwidth = json_data["bandwidth"]
        return [], 200

api.add_resource(DivingDirection, '/api/driving-direction')
api.add_resource(Track, '/api/track')
api.add_resource(SdrConfig, '/api/sdrConfig')
api.add_resource(SDR, '/api/sdr')
api.add_resource(SaveECEF, '/api/save-ECEF')
api.add_resource(SaveNMEA, '/api/save-NMEA')
api.add_resource(SaveECEFOnServer, '/api/save-NMEA-on-server')

# TODO 自选是否允许重复

def runGnuradioTransfer(repeat=False):
    global transfer_p, grc_transfer_p, run_transter
    run_transter = True
    # 
    grc_transfer_p = gnuradio_transfer('gpssim.bin', repeat, samp_rate, bandwidth)
    grc_transfer_p.run()
    run_transter = False
    del grc_transfer_p
    # command = ["python", "gnuradio_transfer.py"]
    # command = "python gnuradio_transfer.py"
    # transfer_p = subprocess.Popen(command, shell=True)
    # transfer_p.wait()

def runBladeRFTransfer(repeat=False):
    global transfer_p, run_transter
    run_transter = True
    if repeat:
        command = ["bladeRF-cli", "-s", "bladerf_repeat.script"]
    else:
        command = ["bladeRF-cli", "-s", "bladerf.script"]
    transfer_p = subprocess.Popen(command)
    transfer_p.wait()
    run_transter = False


def runBladeRF2Transfer(repeat=False):
    global transfer_p, run_transter
    run_transter = True
    if repeat:
        command = ["bladeRF-cli", "-s", "bladerf2_repeat.script"]
    else:
        command = ["bladeRF-cli", "-s", "bladerf2.script"]
    transfer_p = subprocess.Popen(command)
    transfer_p.wait()
    run_transter = False

def runHackRFTransfer(repeat=False):
    # TODO global var
    global transfer_p, run_transter, samp_rate
    run_transter = True
    samp_rate_str = str(samp_rate)
    if repeat:
        command = ["hackrf_transfer","-t","gpssim.bin","-f","1575420000","-s", samp_rate_str,"-a","0","-x","47","-R"]
    else:
        command = ["hackrf_transfer", "-t", "gpssim.bin", "-f",
                   "1575420000", "-s", samp_rate_str, "-a", "0", "-x", "47", "-R"]
    transfer_p = subprocess.Popen(command)
    transfer_p.wait()
    run_transter = False

def runIQGenerator(location, gpstime, bits="8"):
    global generator_p, run_generator, samp_rate
    samp_rate_str = str(samp_rate)
    run_generator = True
    command = ["./gps-sdr-sim", "-e",  "brdc.21n", "-l",
               location, "-b", bits, "-s", samp_rate_str, "-d", "300", "-T", gpstime]
    print(command)
    generator_p = subprocess.Popen(command)
    generator_p.wait()

def runECEFGenerator(path, gpstime, bits="8"):
    global generator_p, run_generator, samp_rate
    samp_rate_str = str(samp_rate)
    run_generator = True
    command = ["./gps-sdr-sim", "-e", "brdc.21n", "-u", path,
               "-b", bits, "-s", samp_rate_str, "-d", "3000", "-T", gpstime]
    print(command)
    generator_p = subprocess.Popen(command)
    generator_p.wait()

def checkSDR():
    global SDRonline, SDRmode
    while True:
        sdr = False
        for devid, param in usb_devices.items():
            time.sleep(1)
            # result = os.popen(
            #     'lsusb -d {} | grep {}'.format(devid, param["vendor"])).read()
            result = os.popen(
                'lsusb -d {}'.format(devid)).read()
            if result != '':
                SDRmode = param["product"]
                sdr = True
                break
        if sdr:
            SDRonline = True
        else:
            SDRonline = False



@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
    return send_from_directory('./static', path)


@app.route('/')
def root():
    return send_from_directory('./static', 'index.html')


usb_devices = {
    "2500:0020": {
        "vendor": "Ettus",
        "product": "usrp"
    },
    "1d50:6089": {
        "vendor": "OpenMoko",
        "product": "hackrf"
    },
    "2cf0:5246": {
        "vendor": "Nuand",
        "product": "bladerf"
    },
    "2cf0:5250": {
        "vendor": "Nuand",
        "product": "bladerf2"
    },
    "1d50:6108": {
        "vendor": "OpenMoko",
        "product": "limesdr"
    }
}

t = threading.Thread(target=checkSDR)
# t.deamon = True
t.deamon = True
t.start()

if not os.path.exists(tracks_path):
    os.mkdir(tracks_path)

if not os.path.exists(ecef_path):
    os.mkdir(ecef_path)



# app.run(host="0.0.0.0", port=5000, debug=False, processes=True)

def sig_handler(sig=None, frame=None):
    global run_transter, transfer_p, generator_p
    if run_transter:
        run_transter = False
        if transfer_p:
            transfer_p.send_signal(signal.SIGINT)
            transfer_p.send_signal(signal.SIGTERM)
            transfer_p.wait()
        if generator_p:
            generator_p.send_signal(signal.SIGINT)
            generator_p.send_signal(signal.SIGTERM)
            generator_p.wait()
    sys.exit(0)


if __name__ == '__main__':
    signal.signal(signal.SIGINT, sig_handler)
    signal.signal(signal.SIGTERM, sig_handler)
    server = pywsgi.WSGIServer(('0.0.0.0', 5000), app, log=None)
    server.serve_forever()
