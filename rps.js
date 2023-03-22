//Pseudo Code:
//Start the game with the player inputting their rps
//Player presses start
//If both player and cpu variables contain a string, run the winDecide() function
//If either player or cpu reach 5 points, run the winners name on screen with a restart button

//Computers randomly generates rps
console.log("Player:");
function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * rps.length);
  let randomrps = rps[random];
  console.log(randomrps);
  //document.getElementsByClassName("testing").innerHTML = getComputerChoice();
  return randomrps;
}

function getPlayerChoice() {
  let rpsPlayerInput = "rock";
  return rpsPlayerInput;
}
console.log(getPlayerChoice());

console.log("CPU:");
//Defines the computer as the getComputerChoice function and player as the getPlayerChoice function
let computer = getComputerChoice();
let player = getPlayerChoice();

//The logic of RPS
if (computer == player) {
  console.log("DRAW");
} else if (computer == "rock" && player == "scissors") {
  console.log("computer has won");
} else if (computer == "paper" && player == "rock") {
  console.log("computer has won");
} else if (computer == "scissors" && player == "paper") {
  console.log("computer has won");
} else if (computer == "paper" && player == "scissors") {
  console.log("player has won");
} else if (computer == "scissors" && player == "rock") {
  console.log("player has won");
} else if (computer == "rock" && player == "paper") {
  console.log("player has won");
}

///const startbutton = document.querySelector("start");

//button.addEventListener("click", () => {
// console.log("Button clicked.");
//});

function testing() {
  const testing = document.querySelector("start");
  return testing;
}

console.log(testing());
