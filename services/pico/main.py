import neopixel
import network
import urequests
import ujson
import time
from machine import Pin

xres=8
yres=8
pin = 28

def mapPixel(x, y):
    if y % 2 == 1:
        return xres * y + x
    else:
        return xres * y + xres - 1 - x
    
wall = neopixel.NeoPixel(machine.Pin(pin), xres * yres)
wall.write()

ssid = 'Mi_9T'
password = 'j15a17ph'

ip = '192.168.118.147'

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(ssid, password)

while not wlan.isconnected():
    print("try to connect...")
    time.sleep_ms(1000)
    pass	

while True:
    print("Try to get data from API ...")
    try:
        print("im here")
        r = urequests.get("http://" + ip + ":3000/bitmap")
        print("here")
        response = r.json()
        r.close()
        print("Response:", response)
        for item in response["data"]["bitmap"]:
            target_index = mapPixel(item["x"], item["y"])
            # Définir la couleur de la LED ciblée
            wall[target_index] = (item["r"], item["g"], item["b"])

        wall.write()
    except Exception as error:
        print("Error:", error)
    time.sleep_ms(1000)
