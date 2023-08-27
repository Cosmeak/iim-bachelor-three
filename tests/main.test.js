import { getRandomNumber } from "../src/main.js";

test("it should be an integer", () => {
	const number = getRandomNumber();
	expect(number).toBeGreaterThanOrEqual(0);
	expect(number).toBeLessThanOrEqual(100);
});