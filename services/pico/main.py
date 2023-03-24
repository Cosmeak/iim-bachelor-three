import neopixel, network, urequests, ujson, time
from machine import Pin

def mapPixel(x, y):
    if y % 2 == 1:
        return xres * y + x
    else:
        return xres * y + xres - 1 - x
    
wall = neopixel.NeoPixel(machine.Pin(28), 16 * 16)
wall.write()

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect("IIM_Private", "Creatvive_Lab_2023")
while not wlan.isconnected():
    print("try to connect...")
    wlan.connect("IIM_Private", "Creatvive_Lab_2023")
    time.sleep_ms(1000)
    pass

while True:
    print("Try to get data from API ...")
    try:
        response = urequests.get("http://localhost:3000/bitmap")
        response = response.json()
        print("Response:", response)
        for item in response.data.bitmap:
            target_index = mapPixel(item["x"], item["y"])
            # Définir la couleur de la LED ciblée
            wall[target_index] = (item["r"], item["g"], item["b"])
        
        wall.write()
    except Exception as error:
        print("Error:", error)
    time.sleep_ms(1000)
