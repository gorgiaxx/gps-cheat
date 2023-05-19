#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#
# SPDX-License-Identifier: GPL-3.0
#
# GNU Radio Python Flow Graph
# Title: Gps Cheat Grc
# GNU Radio version: 3.8.2.0

from gnuradio import blocks
import os
import pmt
from gnuradio import gr
from gnuradio.filter import firdes
import sys
import signal
from argparse import ArgumentParser
from gnuradio.eng_arg import eng_float, intx
from gnuradio import eng_notation
from gnuradio import uhd
from gnuradio import soapy
import os
import time
import osmosdr
from importlib import reload


mode_mapping = {
    "hackrf": "hackrf_info | grep 'Serial number: ' | awk -F '[ ]+' '{printf $3}'",
    "limesdr": "LimeUtil --find | grep -e 'serial=' | awk -F '[=]+' '{printf $5}' | sed -e 's/]//'",
    "usrp": "uhd_find_devices  | grep 'serial: ' | awk -F '[ ]+' '{printf $3}'",
    "bladerf": "bladeRF-cli -p  | grep 'Serial:' | awk -F '[ ]+' '{printf $3}'",
}
sdr_sn = {
    "hackrf": '',
    "limesdr": '',
    "usrp": '',
    "bladerf": '',
}

class gps_cheat_grc(gr.top_block):

    def __init__(self, iq_file, usrp_sn='', hackrf_sn='', limesdr_sn='', bladerf_sn='', repeat=False, samp_rate=2600000, bandwidth=2500000):
        gr.top_block.__init__(self, "Gps Cheat Grc")
        self.usrp_sn = usrp_sn
        self.hackrf_sn = hackrf_sn
        self.limesdr_sn = limesdr_sn
        self.bladerf_sn = bladerf_sn
        self.samp_rate = samp_rate
        self.bandwidth = bandwidth
        self.gps_l1 = gps_l1 = 1575420000

        while not os.access(iq_file, os.R_OK):
            break

        self.blocks_interleaved_char_to_complex_0 = blocks.interleaved_char_to_complex(False)

        fd = os.open(iq_file, os.O_RDONLY)
        self.blocks_file_descriptor_source_0 = blocks.file_descriptor_source(gr.sizeof_char*1, fd, repeat)
            
        self.connect((self.blocks_file_descriptor_source_0, 0), (self.blocks_interleaved_char_to_complex_0, 0))

        

        if self.usrp_sn:
            self.uhd_usrp_sink = uhd.usrp_sink(
                ",".join(('serial=' + self.usrp_sn, "")),
                uhd.stream_args(
                    cpu_format="fc32",
                    otw_format="sc16",
                    args='',
                    channels=list(range(0,1)),
                ),
                '',
            )
            self.uhd_usrp_sink.set_clock_source('internal', 0)
            self.uhd_usrp_sink.set_center_freq(gps_l1, 0)
            self.uhd_usrp_sink.set_gain(100, 0)
            self.uhd_usrp_sink.set_antenna('TX/RX', 0)
            self.uhd_usrp_sink.set_bandwidth(bandwidth, 0)
            self.uhd_usrp_sink.set_samp_rate(samp_rate)
            self.connect((self.blocks_interleaved_char_to_complex_0, 0),
                     (self.uhd_usrp_sink, 0))

        if self.limesdr_sn:
            self.soapy_limesdr_sink_0 = soapy.sink('driver=lime', "fc32", 1, '', '', [''], [''])
            self.soapy_limesdr_sink_0.set_sample_rate(0, samp_rate)
            self.soapy_limesdr_sink_0.set_bandwidth(0, bandwidth)
            self.soapy_limesdr_sink_0.set_frequency(0, gps_l1)
            self.soapy_limesdr_sink_0.set_frequency_correction(0, 0)
            self.soapy_limesdr_sink_0.set_gain(0, min(max(64, -12.0), 64.0))
            self.connect((self.blocks_interleaved_char_to_complex_0, 0), (self.soapy_limesdr_sink_0, 0))

        if self.hackrf_sn:
            # No synchronization enforced.
            self.osmosdr_sink_hackrf = osmosdr.sink(args="numchan=" + str(1) + " " + 'hackrf=' + self.hackrf_sn)
            self.osmosdr_sink_hackrf.set_time_unknown_pps(osmosdr.time_spec_t())
            self.osmosdr_sink_hackrf.set_sample_rate(samp_rate)
            self.osmosdr_sink_hackrf.set_center_freq(gps_l1, 0)
            self.osmosdr_sink_hackrf.set_freq_corr(0, 0)
            self.osmosdr_sink_hackrf.set_gain(0, 0)
            self.osmosdr_sink_hackrf.set_if_gain(47, 0)
            self.osmosdr_sink_hackrf.set_bb_gain(0, 0)
            self.osmosdr_sink_hackrf.set_antenna('TX/RX', 0)
            self.osmosdr_sink_hackrf.set_bandwidth(bandwidth, 0)
            self.connect((self.blocks_interleaved_char_to_complex_0, 0), (self.osmosdr_sink_hackrf, 0))

        if self.bladerf_sn:
            self.osmosdr_sink_bladerf = osmosdr.sink(
                args="numchan=" + str(1) + " " + 'bladerf=' + self.bladerf_sn
            )
            self.osmosdr_sink_bladerf.set_time_unknown_pps(osmosdr.time_spec_t())
            self.osmosdr_sink_bladerf.set_sample_rate(samp_rate)
            self.osmosdr_sink_bladerf.set_center_freq(gps_l1, 0)
            self.osmosdr_sink_bladerf.set_freq_corr(0, 0)
            self.osmosdr_sink_bladerf.set_gain(0, 0)
            self.osmosdr_sink_bladerf.set_if_gain(-4, 0)
            self.osmosdr_sink_bladerf.set_bb_gain(0, 0)
            self.osmosdr_sink_bladerf.set_antenna('', 0)
            self.osmosdr_sink_bladerf.set_bandwidth(bandwidth, 0)
            self.connect((self.blocks_interleaved_char_to_complex_0, 0), (self.osmosdr_sink_hackrf, 0))

    def get_samp_rate(self):
        return self.samp_rate

    def set_samp_rate(self, samp_rate):
        self.samp_rate = samp_rate
        self.osmosdr_sink_hackrf.set_sample_rate(self.samp_rate)
        self.osmosdr_sink_bladerf.set_sample_rate(self.samp_rate)
        self.uhd_usrp_sink.set_samp_rate(self.samp_rate)
        self.uhd_usrp_sink.set_bandwidth(self.samp_rate, 0)

    def get_bandwidth(self):
        return self.bandwidth

    def set_bandwidth(self, bandwidth):
        self.bandwidth = bandwidth
        self.osmosdr_sink_hackrf.set_sample_rate(self.bandwidth)
        self.osmosdr_sink_bladerf.set_bandwidth(self.bandwidth)
        self.uhd_usrp_sink.set_bandwidth(self.bandwidth)
        self.uhd_usrp_sink.set_bandwidth(self.bandwidth, 0)

    def get_gps_l1(self):
        return self.gps_l1

    def set_gps_l1(self, gps_l1):
        self.gps_l1 = gps_l1
        self.osmosdr_sink_hackrf.set_center_freq(self.gps_l1, 0)
        self.osmosdr_sink_bladerf.set_center_freq(self.gps_l1, 0)
        self.uhd_usrp_sink.set_center_freq(self.gps_l1, 0)

    def __del__(self):
        reload(uhd)
        reload(soapy)
        reload(osmosdr)


def gnuradio_transfer(iq_path, repeat=False, samp_rate=2600000, bandwidth=2500000):
    for m in mode_mapping:
        result = os.popen(mode_mapping[m]).read()
        if result != '':
            sdr_sn[m] = result
            break
    tb = gps_cheat_grc(iq_file=iq_path, usrp_sn=sdr_sn['usrp'], hackrf_sn=sdr_sn['hackrf'], limesdr_sn=sdr_sn['limesdr'], bladerf_sn=sdr_sn['bladerf'], repeat=repeat, samp_rate=samp_rate, bandwidth=bandwidth)
    return tb

def start_gnuradio_sdr(iq_path, repeat=False):
    for m in mode_mapping:
        result = os.popen(mode_mapping[m]).read()
        if result != '':
            sdr_sn[m] = result
            break
    tb = gps_cheat_grc(
        iq_file=iq_path, usrp_sn=sdr_sn['usrp'], hackrf_sn=sdr_sn['hackrf'], limesdr_sn=sdr_sn['limesdr'], bladerf_sn=sdr_sn['bladerf'], repeat=repeat)

    def sig_handler(sig=None, frame=None):
        tb.stop()
        tb.wait()

        sys.exit(0)

    signal.signal(signal.SIGINT, sig_handler)
    signal.signal(signal.SIGTERM, sig_handler)

    tb.run()


if __name__ == '__main__':
    start_gnuradio_sdr('gpssim.bin')
