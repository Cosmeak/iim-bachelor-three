# Creative Technologist

The goals of this project and to understand and discover how objects and the world of the web are connected.

This is why, we choose to do a little LED board (16x16) and connect it with a front that handle all color choice and send it to an API that our card call every second to check colors data for each LED.


## How it work

Here's a picture of our system. We used a Raspberry Pico and a prebuild LED board, we just have solder cables on it.

![](/docs/assembly.jpg)

And then a schema of it: 

![](/docs/schema.jpeg)

For our API, we used NodeJS and express, a basic web backend combination 🙂. Our fronted is just HTML, CSS and Javascript.

You can find our code for frontend is `apps/frontend`, our API in `services/api` and the microcontroller code inside `services/pico`.


## The result

Place video here


## Contributors

- [Oxyzal - Steven MADI](https://github.com/Oxyzal)
- [Yannis Obert](https://github.com/yannisobert)
- [Cosmeak - Guillaume FINE](https://github.com/Cosmeak)