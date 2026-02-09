// array
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[0]);
// Array Methods
// myArr.push(6);
// myArr.pop();

// myArr.unshift(9);
// // myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// .join()
// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice
// console.log("Original Array:", myArr);

// slice() - creates a copy, does not modify original
const slicedArr = myArr.slice(1, 4); // from index 1 up to (but not including) index 4
// console.log("Slice (1, 4):", slicedArr);
// console.log("Original after slice:", myArr); // unchanged

// splice() - modifies original array
// const splicedArr = myArr.splice(1, 2); // remove 2 elements starting from index 1
// console.log("Splice (1, 2):", splicedArr);
// console.log("Original after splice:", myArr); // modified

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));