const fs = require("fs");
// 백준 베출시 path 경로 0, 'utf8'로 변경
const input = fs.readFileSync('./input.txt').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);




