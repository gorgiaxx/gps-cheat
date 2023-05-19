import xml.etree.ElementTree as ET
from math import *
import json

# cordtransform

x_PI = 3.14159265358979324 * 3000.0 / 180.0
PI = 3.1415926535897932384626
a = 6378245.0
ee = 0.00669342162296594323

def out_of_china(lng, lat):
    return not (lng > 73.66 and lng < 135.05 and lat > 3.86 and lat < 53.55)


def transformlat(lng, lat):
    ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * sqrt(abs(lng))
    ret += (20.0 * sin(6.0 * lng * PI) + 20.0 *
            sin(2.0 * lng * PI)) * 2.0 / 3.0
    ret += (20.0 * sin(lat * PI) + 40.0 *
            sin(lat / 3.0 * PI)) * 2.0 / 3.0
    ret += (160.0 * sin(lat / 12.0 * PI) + 320 *
            sin(lat * PI / 30.0)) * 2.0 / 3.0
    return ret

def transformlng(lng, lat):
    ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * sqrt(abs(lng))
    ret += (20.0 * sin(6.0 * lng * PI) + 20.0 * sin(2.0 * lng * PI)) * 2.0 / 3.0
    ret += (20.0 * sin(lng * PI) + 40.0 * sin(lng / 3.0 * PI)) * 2.0 / 3.0
    ret += (150.0 * sin(lng / 12.0 * PI) + 300.0 * sin(lng / 30.0 * PI)) * 2.0 / 3.0
    return ret

def bd09towgs84(bd_lng, bd_lat):
    x = bd_lng - 0.0065
    y = bd_lat - 0.006
    z = sqrt(x * x + y * y) - 0.00002 * sin(y * x_PI)
    theta = atan2(y, x) - 0.000003 * cos(x * x_PI)
    lng = z * cos(theta)
    lat = z * sin(theta)
    if (out_of_china(lng, lat)):
        return lng, lat
    else:
        dlat = transformlat(lng - 105.0, lat - 35.0)
        dlng = transformlng(lng - 105.0, lat - 35.0)
        radlat = lat / 180.0 * PI
        magic = sin(radlat)
        magic = 1 - ee * magic * magic
        sqrtmagic = sqrt(magic)
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI)
        dlng = (dlng * 180.0) / (a / sqrtmagic * cos(radlat) * PI)
        mglat = lat + dlat
        mglng = lng + dlng
        return lng * 2 - mglng, lat * 2 - mglat

KMLfile = r'test.kml'
GGAfile = 'GGA.txt'  # 生成的文件名
ECEFfile = 'ECEF.txt'
frequency = 10  # 频率
# maxSpeed = 20  # 最大速度
# maxAcc = 10  # 最大加速度


EARTH_REDIUS = 6371393
PI = 3.1415926535897932384626
perLatitude = 111189.57695999  # 每一纬度的距离，单位m
R2D = 57.2957795131


# 读取kml文件，获得坐标
def readKMLfile(json_data):
    '''
    filePath = KMLfile
    tree = ET.parse(filePath)
    lineStrings = tree.findall('.//{http://www.opengis.net/kml/2.2}LineString')

    for attributes in lineStrings:
        for subAttribute in attributes:
            if subAttribute.tag == '{http://www.opengis.net/kml/2.2}coordinates':
                llh1 = subAttribute.text

    llh2 = llh1.split()
    llh = [0] * len(llh2)
    for i in range(0, len(llh2)):
        llh[i] = llh2[i].split(",")
        llh[i] = list(map(float, llh[i]))

    return llh
    '''
    o = json_data
    llh = []
    for i in range(0, len(o)):
        lng = o[i]['start_location']['lng']
        lat = o[i]['start_location']['lat']
        llh.append([lng, lat, 100])

        if i == len(o) - 1:
            lng = o[i]['end_location']['lng']
            lat = o[i]['end_location']['lat']
            llh.append([lng, lat, 100])

    return llh

# 转换成符合GGA要求的坐标
def getGGAcoor(llh):
    for i in range(0, len(llh)):
        llh[i][0] = floor(llh[i][0]) * 100 + llh[i][0] % 1 * 60
        llh[i][1] = floor(llh[i][1]) * 100 + llh[i][1] % 1 * 60

# 生成UTC时间表(GGA)
def getUTClist(llh):

    hour = 9
    minute = 0
    second1 = 0
    second2 = 0

    UTClist = [0]*len(llh)

    for i in range(0, len(UTClist)):
        if i != 0:
            second2 = second2 + 1 / frequency * 100

        if second2 >= 100:
            second2 %= 100
            second1 += 1

        if second1 >= 60:
            second1 %= 60
            minute += 1

        if minute >= 60:
            minute %= 60
            hour += 1

        if hour >= 24:
            hour %= 24

        UTClist[i] = str('%02d' % hour) + str('%02d' % minute) + str('%02d' % second1) + '.' + str('%02d' % second2)

    return UTClist

# 生成GGA格式文件
def generateGGA(json_data):
    llh = generatecoor(json_data)
    # o = open(GGAfile, 'w')
    GGA = ''

    NMEAtype_0 = 'GPGGA'
    GPSstate_6 = '1'  # GPS状态，1为单点定位
    satellite_7 = '05'  # 卫星数量
    HDOP_8 = '5.1'  # 水平精度因子
    # altitude_9 = '100.0'  # str(round(llh[0][2], 2))
    unit_10 = 'M'
    WGS84_11 = '-21.3213'  # 地球椭球面相对大地水准面的高度 WGS84水准面划分
    unit_12 = 'M'
    difference_13_14 = ''  # 差分时间和ID，设为空

    getGGAcoor(llh)
    UTClist = getUTClist(llh)

    for i in range(0, len(llh)):
        UTC_1 = UTClist[i]

        # 获取纬度
        latitude_2 = llh[i][1]
        if latitude_2 >= 0:
            latitudeType_3 = 'N'
        else:
            latitudeType_3 = 'S'
        latitude_2 = '%.8f' % latitude_2

        # 获取经度
        longitude_4 = llh[i][0]
        if longitude_4 >= 0:
            longitudeType_5 = 'E'
        else:
            longitudeType_5 = 'W'
        longitude_4 = '%.8f' % longitude_4

        # 获取海拔
        altitude_9 = '%.1f' % llh[i][2]

        # 计算校验和
        checklist = [NMEAtype_0, UTC_1, latitude_2, latitudeType_3, longitude_4, longitudeType_5,
                     GPSstate_6, satellite_7, HDOP_8, altitude_9, unit_10, WGS84_11, unit_12,
                     difference_13_14]
        checkstr = ''.join(checklist)
        checklist0 = list(checkstr)

        # 逐字转换为ASCII码进行异或
        for i in range(0, len(checklist0)):
            if i == 0:
                check = ord(checklist0[i])
            else:
                check ^= ord(checklist0[i])

        check0 = '*' + hex(check)[2:].upper()
        checklist.append(check0)

        # 生成一行GGA数据
        GGAline = '$' + ','.join(checklist)
        # o.write(GGAline + '\n')
        GGA += GGAline + '\n'

    # o.close()
    return GGA

def rad(d):
    return d * PI / 180.0

def getDistance(lat1, lng1, lat2, lng2):
    radLat1 = rad(lat1)
    radLat2 = rad(lat2)
    a = radLat1 - radLat2
    b = rad(lng1) - rad(lng2)
    s = 2 * asin(sqrt(pow(sin(a/2), 2) + cos(radLat1) * cos(radLat2) * pow(sin(b/2), 2)))
    s = s * EARTH_REDIUS
    return s

# 经纬海拔转换成地心坐标
def llh2xyz(llh):
    xyz = [0]*3
    llh0 = [0]*3
    # 转换为弧度制，海拔加上WGS84标准
    llh0[0] = llh[0] / R2D
    llh0[1] = llh[1] / R2D
    llh0[2] = llh[2] + (-21.3213)

    a = 6378137.0
    e = 0.0818191908426
    e2 = e * e

    clat = cos(llh0[1])
    slat = sin(llh0[1])
    clon = cos(llh0[0])
    slon = sin(llh0[0])
    d = e * slat

    n = a / sqrt(1.0 - d * d)
    nph = n + llh0[2]

    tmp = nph * clat
    xyz[0] = tmp * clon
    xyz[1] = tmp * slon
    xyz[2] = ((1.0 - e2) * n + llh0[2]) * slat
    return xyz

# 生成ECEF文件
def generateECEF(json_data):
    llh = generatecoor(json_data)
    t = 0.0
    ECEF = ''

    for i in range(0, len(llh)):
        llh0 = llh[i]

        xyz = llh2xyz(llh0)
        ECEFlist = ['%5.2f' % t, '%.3f' % xyz[0], '%.3f' % xyz[1], '%.3f' % xyz[2]]
        ECEFline = ','.join(ECEFlist)
        # o.write(ECEFline + '\n')
        ECEF += ECEFline + '\n'

        t += 1/frequency

    # o = open(ECEFfile, 'w')
    # o.write(ECEF)
    # o.close()
    return ECEF


# 计算每三个坐标点形成的线线角
def getInc(llh, i):
    # 三个点依次为p1,p2,p3
    p1 = llh2xyz(llh[i - 1])
    p2 = llh2xyz(llh[i])
    p3 = llh2xyz(llh[i + 1])

    p1p2 = sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2 + (p2[2] - p1[2]) ** 2)
    p2p3 = sqrt((p3[0] - p2[0]) ** 2 + (p3[1] - p2[1]) ** 2 + (p3[2] - p2[2]) ** 2)

    # 向量积P2P1*P2P3
    p = (p1[0] - p2[0]) * (p3[0] - p2[0]) + (p1[1] - p2[1]) * (p3[1] - p2[1]) + (p1[2] - p2[2]) * (p3[2] - p2[2])
    if (p1p2 * p2p3) == 0:
        return 1
    else:
        inc = acos(p / (p1p2 * p2p3))
        return inc


# speed:当前速度
# inc:当前角度
# count:当前行驶距离
# distance:总距离
# t:时间间隔
def getSpeed(speed, inc, count, distance, t, maxSpeed, speedChangeList):
    inc0 = inc * R2D
    # 转弯速度变化数据
    for i in range(0, len(speedChangeList)):
        if speedChangeList[i][1] <= inc0 < speedChangeList[i][0]:
            turnSpeed = maxSpeed * speedChangeList[i][2]
            acc = speedChangeList[i][3]
            if speed >= turnSpeed:
                turnDistance = (speed ** 2 - turnSpeed ** 2) / (2 * acc)
            else:
                turnDistance = 0
            break

    # 未到减速距离
    if count <= (distance - turnDistance):
        if speed == maxSpeed:
            return speed

        elif speed < maxSpeed:
            speed += acc * t
            if speed > maxSpeed:
                speed = maxSpeed
            return speed

    # 已到减速距离
    else:
        if speed == turnSpeed:
            return speed

        elif speed < turnSpeed:
            speed += acc * t
            if speed > turnSpeed:
                speed = turnSpeed
            return speed

        elif speed > turnSpeed:
            speed -= acc * t
            if speed < turnSpeed:
                speed = turnSpeed
            return speed


def generatecoor(json_data):
    llh = readKMLfile(json_data)

    distance = []  # 坐标点两两之间的距离
    for i in range(1, len(llh)):
        s = getDistance(llh[i][1], llh[i][0], llh[i - 1][1], llh[i - 1][0])
        distance.append(s)

    speed = 0  # 单位m/s
    interval = 1 / frequency

    timeCount = 0
    coordinate = []  # GGA文件的坐标

    # 详细坐标的生成
    for i in range(0, len(llh) - 1):
        distanceCount = 0
        maxSpeed = json_data[i]['motion_conf']['maxSpeed']
        speedChangeList = getSpeedChangeList(json_data[i])

        # latitude1 = llh[i][1]
        # longitude1 = llh[i][0]
        longitude1, latitude1 = bd09towgs84(llh[i][0], llh[i][1])
        # latitude2 = llh[i + 1][1]
        # longitude2 = llh[i + 1][0]
        longitude2, latitude2 = bd09towgs84(llh[i+1][0], llh[i+1][1])
        altitude = llh[i][2]

        # 计算角度
        if i < len(llh) - 2:
            inc = getInc(llh, i + 1)
        else:
            inc = 0

        if i == 0:
            coordinate.append([longitude1, latitude1, altitude])

        # 计算两点连线的水平夹角latlonInc
        try:
            latlonInc = abs(atan((abs(latitude2 - latitude1) * perLatitude) / \
                                   (abs(longitude2 - longitude1) * perLatitude * cos(rad(latitude1)))))
        except:
            latlonInc = 1.5707963267948966

        while distanceCount < distance[i]:
            speed = getSpeed(speed, inc, distanceCount, distance[i], interval, maxSpeed, speedChangeList)

            distance0 = interval * speed  # 此段时间间隔内移动的距离
            distancex = distance0 * abs(cos(latlonInc))
            distancey = distance0 * abs(sin(latlonInc))

            # 经纬度的变化值
            coorlen = len(coordinate)
            latitude0 = distancey / perLatitude
            longitude0 = distancex / (perLatitude * cos(rad(coordinate[coorlen - 1][1])))

            if longitude1 < longitude2:
                newLon = coordinate[coorlen - 1][0] + longitude0
            else:
                newLon = coordinate[coorlen - 1][0] - longitude0
            if latitude1 < latitude2:
                newLat = coordinate[coorlen - 1][1] + latitude0
            else:
                newLat = coordinate[coorlen - 1][1] - latitude0
            coordinate.append([newLon, newLat, altitude])

            timeCount += interval
            distanceCount += distance0

            if speed == 0:
                break

        coordinate[len(coordinate) - 1][0] = longitude2
        coordinate[len(coordinate) - 1][1] = latitude2

    return coordinate


def getSpeedChangeList(json_data):
    a = json_data['motion_conf']['speedChangeList']
    li = []
    for i in range(0, len(a)):
        item = [a[i]['angleStart'], a[i]['angleEnd'], a[i]['speedDecayRate'], a[i]['acc'], a[i]['jerk']]
        li.append(item)

    return li







'''
f = open("1.txt", "r")
a = f.readline().replace("\'","\"")
a = json.loads(a)
# l = readKMLfile(a)
l = generatecoor(a)

q = []
for i in range(0, len(l)):
    lon = (l[i][0] - l[0][0]) * (perLatitude * cos(rad(l[i][1])))
    lat = (l[i][1] - l[0][1]) * perLatitude
    q.append([lon, lat])

print(q)
'''



