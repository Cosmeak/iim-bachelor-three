# OS-TD5
A simple CSV reader and writter to generate random marks for students.

## Installation
```bash
npm i os-td5
```

## Usage
```js
const {generateMarkFromAllStudents} = require('os-td5');
const [header, students, average] = generateMarkFromAllStudents("path/to/file.csv", 0, 20);
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
