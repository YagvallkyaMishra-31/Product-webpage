const score = 400;
// console.log(score);
const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.896;
// console.log(otherNumber.toPrecision(3));

// ++++++++++++++ Math +++++++++++++++++++++++
console.log(Math.abs(-4));
// with abs only negative becomes positive nothing else
console.log(Math.round(4.6));
// with round it rounds to nearest integer
console.log(Math.ceil(4.2));
// with ceil it rounds to nearest integer
console.log(Math.floor(4.2));
// with floor it rounds to nearest integer
const min=20;
const max=30;
console.log(Math.floor(Math.random()*(max-min+1))+min);