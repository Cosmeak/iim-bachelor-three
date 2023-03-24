"use strict"
const body = document.querySelector("body");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
setColor();
input.addEventListener("input", setColor);

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

function chooseColor(square) {
    document.getElementById(square).style.backgroundColor = setColor()

    let x = parseInt(square.slice(6, 7), 16)
    let y = parseInt(square.slice(8, 9), 16)
    let object = hexToRgb(setColor(), x, y)

    console.log(object)
}