///////// PURE FUNCTION /////////
//this is pure function is a function has same output when input same
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 2));

//this is pure function with side effect
let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; //this is side effect
  return sum;
}

console.log(addMoreNumbers(1, 5));
console.log(addMoreNumbers(1, 5));

///////// IMPURE FUNCTION /////////
//this is impure function is a function has not same output when input same
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));
