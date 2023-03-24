"use strict"
const body = document.querySelector("body");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
setColor();
input.addEventListener("input", setColor);

function setColor() {
    body.style.backgroundColor = input.value;
    colorCode.innerHTML = input.value;

    console.log(input.value)
    console.log(hexToRgb(input.value))
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
}
