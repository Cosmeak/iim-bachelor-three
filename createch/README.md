# Creative Technologist

The goals of this project is to understand and discover how objects and the world of the web are connected.

This is why, we choose to do a little LED board (16x16) and connect it with a front that handle all color choice and send it to an API that our card call every second to check colors data for each LED.


## How it work

Here's a picture of our system. We used a Raspberry Pico and a prebuild LED board, we just have solder cables on it.

![](/docs/assembly.jpg)

And then a schema of it: 

![](/docs/schema.jpeg)

For our API, we used NodeJS and express, a basic web backend combination 🙂. Our fronted is just HTML, CSS and Javascript.

You can find our code for frontend is `apps/frontend`, our API in `services/api` and the microcontroller code inside `services/pico`.


## The result

https://user-images.githubusercontent.com/90453342/227801185-a61323f1-3cad-44d7-8602-04478b47f06d.mp4


## Contributors

- [Oxyzal - Steven MADI](https://github.com/Oxyzal)
- [Yannis Obert](https://github.com/yannisobert)
- [Cosmeak - Guillaume FINE](https://github.com/Cosmeak)
