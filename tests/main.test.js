import {generateMarkFromAllStudents} from "../src/main.js";

test("generateMarkFromAllStudents", () => {
    generateMarkFromAllStudents("tests/students.csv");
});