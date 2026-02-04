// // const math = require('./math');
// import { add, subtract } from './math.js';
// console.log("Addition:", add(5, 3));
// console.log("Subtraction:", subtract(5, 3));
// const data = fs.readFileSync('data.txt', 'utf-8');
// console.log("file content");
// console.log(data);
// console.time('file read time')
// const data = fs.readFileSync('./data.txt', 'utf-8');
// console.timeEnd("file read time");
// import { performance } from "perf_hooks";
// const start = performance.now();
// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     const end = performance.now();
//     console.log(`time taken: ${(end - start).toFixed(2)}ms`);
// })
// console.log(data);
// console.log("file read completed");

// Blocking code because its running synchronously(line by line)
import fs from "fs"
const data = fs.readFileSync('./word.txt', 'utf-8');
console.log("file read done");
console.log("end");

// non blocking code because its running asynchronously(not line by line)
console.log("start");
fs.readFile('./word.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log("file read done");
    console.log("end");
})