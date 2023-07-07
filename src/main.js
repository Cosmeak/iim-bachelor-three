"use strict";

import fs from "node:fs";

function generateMarkFromAllStudents(csvLink, markMin = 0, markMax = 20) {
    let header, students, averageMark;
    fs.createReadStream( csvLink, "utf8")
        .on('error', (err) => console.error(err))
        .on('data', (data) => {
            [header, students] = csvToObject(data);
            console.log("Data Successfully Loaded");
            console.log("Generating marks...");
            students.forEach((student) => {
                student.note = getRandomMark(markMin, markMax);
            });
            averageMark = getAverageMark(students);
            console.log("Writing marks to file...");
            fs.writeFile(csvLink, objectToCsv(header, students) + "\n total:;" + averageMark, () => {});
        })
        .on('end', (data) => {
            console.log("File successfully written");
            return [header, students, averageMark];
        });
}

function getRandomMark(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function getAverageMark(students) {
    let sum = 0;
    students.forEach((student) => {
        sum += student.note;
    });
    return sum / students.length;
}

function csvToObject(csv) {
    const students = [];
    let header;

    csv.split('\n').forEach((row, i) => {
        if (i === 0) {
            header = row.toLocaleLowerCase().split(";");
        } else {
            let student = {};
            row.split(";").map((column, j) => {
                student[header[j]] = column;
            });
            students.push(student);
        }
    });

    return [header, students];
}

function objectToCsv(header, students, otherData = []){
    const csvHeader = header.join(";") + "\n";
    const csvStudents = students.map((student) => {
        return Object.values(student).join(";");
    }).join("\n");
    return csvHeader + csvStudents;
}

export { generateMarkFromAllStudents };
