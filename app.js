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

///////// FACTORY FUNCTION /////////
// this is factory fucntion is a function that produce another function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax; //this will produce calculateTax function when createTaxCalculator call/execute because it not execute and just declare
}

const calculateVatAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100)); //this argument will as amount in calculateTax and call/execute it
