function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(5, 10));

//////// TEMPLATE STRINGS ///////
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  return `This is a product!`;
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;

//call above function using tempate strings and will save in first argument as array
const productOutput = productDescription`This product (${prodName} is ${prodPrice})`;
console.log(productOutput);
