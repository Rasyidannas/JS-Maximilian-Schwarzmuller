import "./styles.css";

const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }

  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// this is using arrow function
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

//this is using anounymous function
startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;

  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You had picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;

  if (winner === RESULT_DRAW) {
    message = message + "had a draw";
  } else if (winner == RESULT_PLAYER_WINS) {
    message = message + "won.";
  } else {
    message = message + "lost.";
  }

  alert(message);
  gameIsRunning = false;
});

//rest arguments and callback function
const combine = (resultHandler, operator, ...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let sum = 0;
  for (const num of numbers) {
    if (operator === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }

  //this is call callback
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

// this is using bind for delay and run first in this and then in callback
combine(
  showResult.bind(null, "the result after adding all number is:"),
  "ADD",
  1,
  2,
  4,
  9,
  10,
  22
);
