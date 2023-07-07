import fs from 'node:fs';

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
      header = row.toLocaleLowerCase().split(';');
    } else {
      const student = {};
      row.split(';').forEach((column, j) => {
        student[header[j]] = column;
      });
      students.push(student);
    }
  });

  return [header, students];
}

function objectToCsv(header, students) {
  const csvHeader = `${header.join(';')}\n`;
  const csvStudents = students.map((student) => Object.values(student).join(';')).join('\n');
  return csvHeader + csvStudents;
}

function generateMarkFromAllStudents(csvLink, markMin = 0, markMax = 20) {
  let header;
  let students;
  let averageMark;
  fs.createReadStream(csvLink, 'utf8')
    .on('data', (data) => {
      [header, students] = csvToObject(data);
      students.forEach((student) => {
        student.note = getRandomMark(markMin, markMax);
      });
      averageMark = getAverageMark(students);
      fs.writeFile(csvLink, `${objectToCsv(header, students)}\n total:;${averageMark}`, () => {});
    });
}

export default generateMarkFromAllStudents;
