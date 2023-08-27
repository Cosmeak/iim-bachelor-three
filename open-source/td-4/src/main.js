"use strict";

function getRandomNumber(min = 0, max = 100) {
	return Math.ceil(Math.random() * (max - min) + min);
}

export { getRandomNumber };