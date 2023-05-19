import urllib.request
import time
import urllib.request,urllib.parse
from http.cookiejar import CookieJar
from lxml import etree
import ssl
import gzip

ssl._create_default_https_context = ssl._create_unverified_context

proxy_switch = False

proxies = {"http": "http://127.0.0.1:8080", "https": "http://127.0.0.1:8080"}

if proxy_switch:
    proxy_handler = urllib.request.ProxyHandler(proxies)
else:
    proxy_handler = urllib.request.ProxyHandler({})

cookiejar = CookieJar()
cookie_handler = urllib.request.HTTPCookieProcessor(cookiejar)

opener = urllib.request.build_opener(proxy_handler, cookie_handler)


def set_cookie(resp_headers):
    l = []
    for rh in resp_headers:
        print(rh)
        if rh[0] == 'Set-Cookie':
            cookie_list = rh[1].split(';')
            l.append(cookie_list[0])
    return l


def get_url_name():
    localtime = time.localtime(time.time())
    if localtime.tm_year % 4 == 0 and localtime.tm_year % 100 != 0:
        days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    elif localtime.tm_year % 400 == 0:
        days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    else:
        days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    dayCount = sum(days[:localtime.tm_mon - 1]) + localtime.tm_mday
    dayCount -= 1

    year = localtime.tm_year - 2000
    name = "brdc" + "%03d" % dayCount + "0." + str(year) + "n.gz"
    url = 'https://cddis.nasa.gov/archive/gnss/data/daily/' + \
        str(localtime.tm_year)+'/brdc/'+name
    return url, name

fileurl = "https://cddis.nasa.gov/archive/gnss/data/daily/2021/brdc/brdc0720.21n.gz"

brdcurl = "https://cddis.nasa.gov/archive/gnss/data/daily/2021/brdc"

homeurl = "https://urs.earthdata.nasa.gov/"

loginurl = "https://urs.earthdata.nasa.gov/login"

form = {
    'authenticity_token':'',
    'username':'Alone1230',
    'password':'123456aA'
}

headers = {
    'Origin':'https://urs.earthdata.nasa.gov',
    'Content-Type':'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0',
    'Referer':'https://urs.earthdata.nasa.gov/home'
}


# 获取cookie
request = urllib.request.Request(
    url=homeurl, headers=headers)
response = opener.open(request)
data = response.read().decode('utf-8')
# cookies = set_cookie(response.getheaders())
# headers['Cookie'] = ';'.join(cookies)
# print(headers['Cookie'])

# 获取authenticity_token
html = etree.HTML(data)
html_data = html.xpath("//meta[@name='csrf-token']/@content")
form['authenticity_token'] = html_data[0]
print('Auth Token', form['authenticity_token'])

# 登陆
form_data = urllib.parse.urlencode(form).encode('utf-8')
request = urllib.request.Request(url=loginurl, headers=headers, data=form_data)
response = opener.open(request)

# cookies = set_cookie(response.getheaders())
# print(cookies)


##############################################
headers1 = {
'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
# 'Accept-Encoding': 'gzip, deflate, br',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Host': 'cddis.nasa.gov',
'Referer': 'https://cddis.nasa.gov/archive/gnss/data/daily/2021/brdc/',
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
}



headers1['Referer'] = 'https://urs.earthdata.nasa.gov/'

fileurl, file_name = get_url_name()

# 获取ProxyAuth网址
request = urllib.request.Request(url=fileurl, headers=headers1)
response = opener.open(request)

data = response.read().decode('utf-8')
html = etree.HTML(data)
html_data = html.xpath('/html/body/div/section/p/a/@href')
authurl = html_data[0]

request = urllib.request.Request(url=authurl, headers=headers1)
response = opener.open(authurl)
data = response.read()
print('downloaded:', file_name[:-3])
with open('brdc.21n', 'wb') as code:
    data = gzip.decompress(data)
    code.write(data)






