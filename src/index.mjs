import "./styles.css";

const startGameBtn = document.getElementById("start-game-btn")

//this is function desclaration and declaration allow to hoisting
// function startGame() {
//   console.log('Game is starting....');
// }

//this object
// const person = {
//   name: 'Max',
//   //this is method(function insede oject)
//   greet: function greet() {
//     console.log('Hello, there!')
//   }
// }

// person.greet();

//this is using anounymous function
startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
});

//prove of function is an object
// console.dir(startGame);