const infos = require('./information');
const cowsay = require('cowsay');

const student = infos.student;
const message = `Hello student ${student.name} from ${student.campus} campus`;
console.log(cowsay.say({text:message}));