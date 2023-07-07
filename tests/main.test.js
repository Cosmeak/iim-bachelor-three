import {generateMarkFromAllStudents} from "../src/main.js";

test("generateMarkFromAllStudents", () => {
    const [header, students] = generateMarkFromAllStudents("students.csv");
    expect(header).toEqual(["student_pk", "nom", "prenom", "note", "commentaire"]);
    expect(students).toBeInstanceOf(Array);
});