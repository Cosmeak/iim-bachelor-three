"use strict"
const body = document.querySelector("body");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
setColor();
input.addEventListener("input", setColor);

//let list = [{x: 1, y: 1, r: 255, g: 255, b: 255}, {x: 1, y: 2, r: 255, g: 255, b: 255}];
let list = [];

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        list.push({
            x: i,
            y: j,
            r: 255,
            g: 255,
            b: 255
        })
    }
}

function setColor() {
    body.style.backgroundColor = input.value;
    colorCode.innerHTML = input.value;

    return input.value
}

function hexToRgb(hex, x, y) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { x, y, r, g, b };
}

async function chooseColor(square) {
    document.getElementById(square).style.backgroundColor = setColor()

    let coords = square.replace('square', '')
    let object = hexToRgb(setColor(), parseInt(coords.split('-')[0]), parseInt(coords.split('-')[1]))

    let position = list.findIndex(l => l.x == coords.split('-')[0] && l.y == coords.split('-')[1]);
    list[position] = object;
    await sendBitmapToApi(list);
}

async function sendBitmapToApi(bitmap) {
    const res = await fetch("http://localhost:3000/bitmap", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ bitmap: bitmap }),
    });
}