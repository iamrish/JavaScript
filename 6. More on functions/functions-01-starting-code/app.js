const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

// function startGame() {
//   console.log("Game is starting...");
// }

// // Method or function in an object

// let object = {
//   // Arrey this an anonymous function. The function without name!
//   greet: function () {
//     console.log("I can;t believe how much I hate pressures of a new place");
//   },
// };

// object.greet(); // this needs to be the key value, and not the function name
// let myName = "Rishabh";
// console.dir(startGame);

function playerFunction() {
  // input is defined in try block but I am able to use it outside the try block
  let input;
  try {
    input = prompt("Rock, Paper or Scissors?", "").toUpperCase();
    console.log(input);
  } catch {
    alert("Invalid Input. Default is ROCK");
    return ROCK;
  }
  if (input != ROCK && input != PAPER && input != SCISSORS) {
    alert("Invalid Input. Default is ROCK");
    return ROCK;
  }
  return input;
}

function computerFunction() {
  let temp = Math.random();
  if (temp < 0.34) return ROCK;
  else if (temp < 0.67) return PAPER;
  else return SCISSORS;
}


// This is an arrow fucntion
// agar ek hi line hai to jaisa neeche likha hai waissa likh sakte hain nahi to curly braces lagake return karo value       
const findWinner = (playerSelection, computerSelection) =>
  playerSelection === computerSelection
    ? DRAW
    : (playerSelection === ROCK && computerSelection !== PAPER) ||
      (playerSelection === PAPER && computerSelection !== SCISSORS) ||
      (playerSelection === SCISSORS && computerSelection !== ROCK)
    ? PLAYER_WINS
    : COMPUTER_WINS;

// Earlier part of the code
// {if (playerSelection === computerSelection) console.log("It's a draw");
// else if (
//   (playerSelection === ROCK && computerSelection !== PAPER) ||
//   (playerSelection === PAPER && computerSelection !== SCISSORS) ||
//   (playerSelection === SCISSORS && computerSelection !== ROCK)
// ) {
//   console.log(`Player is the winner`);
// }
// else
// console.log('Computer id the winner');}

// Anyonymous function example. This can also lead to memory leaks coz a fucntion is created every time the button is clicked.
// It is advised to be attached to a button with less clicks. Thus, upar starGame udha sakte hain.
startGameBtn.addEventListener("click", function () {
  console.log("The game is starting...");
  let playerSelection = playerFunction();
  let computerSelection = computerFunction();
  console.log(
    "playerSelection: ",
    playerSelection,
    "\ncomputerSelctiom: ",
    computerSelection
  );
  console.log(`${findWinner(playerSelection, computerSelection)}`);
});
