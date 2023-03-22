//Pseudo Code:
//Start the game with the player inputting their rps
//Player presses start
//If both player and cpu variables contain a string, run the winDecide() function
//If either player or cpu reach 5 points, run the winners name on screen with a restart button

//Computers randomly generates rps

console.log("Player:");
//Output of this function is the random string
function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * rps.length);
  let randomrps = rps[random];
  console.log(randomrps);
  return randomrps;
}
//output of this function is the player input depending on rpsPlayerInput
function getPlayerChoice() {
  let rpsPlayerInput = "paper";
  return rpsPlayerInput;
}
console.log(getPlayerChoice());

console.log("CPU:");
//Defines the computer as the getComputerChoice function and player as the getPlayerChoice function
let computer = getComputerChoice();
let player = getPlayerChoice();

//The logic of RPS
function results() {
  if (computer == player) {
    return "DRAW";
  } else if (computer == "rock" && player == "scissors") {
    return "computer has won";
  } else if (computer == "paper" && player == "rock") {
    return "computer has won";
  } else if (computer == "scissors" && player == "paper") {
    return "computer has won";
  } else if (computer == "paper" && player == "scissors") {
    return "player has won";
  } else if (computer == "scissors" && player == "rock") {
    return "player has won";
  } else if (computer == "rock" && player == "paper") {
    return "player has won";
  }
}

console.log(results());

// Below is the previous code from the HTML document
function winnerDecide() {
  let playerArea = document.getElementById("rps-player-area");
  let computerArea = document.getElementById("rps-computer-area");

  if (
    playerArea.innerHTML.includes("rock") &&
    computerArea.innerHTML.includes("scissors")
  ) {
    return "Player has won";
  } else if (
    playerArea.innerHTML.includes("paper") &&
    computerArea.innerHTML.includes("rock")
  ) {
    return "Player has won";
  } else if (
    playerArea.innerHTML.includes("scissors") &&
    computerArea.innerHTML.includes("paper")
  ) {
    return "Player has won";
  } else if (
    playerArea.innerHTML.includes("scissors") &&
    computerArea.innerHTML.includes("rock")
  ) {
    return "Computer has won";
  } else if (
    playerArea.innerHTML.includes("rock") &&
    computerArea.innerHTML.includes("paper")
  ) {
    return "Computer has won";
  } else if (
    playerArea.innerHTML.includes("paper") &&
    computerArea.innerHTML.includes("scissors")
  ) {
    return "Computer has won";
  }
}

//Player buttons are player-choices
//Player area is rps-player-area
let playerOption = document.getElementById("player-choices");
let playerDiv = document.getElementById("rps-player-area");
let clicked = false;
playerOption.onclick = function () {
  playerDiv.innerHTML = "Rock";
  console.log("THE BUTTON WAS CLICKED");
  clicked = true;
};
if ((clicked = true)) {
  console.log("ITS WORKINGGG WWHHHHAAAAATTTT");
}

let computerStart = document.getElementById("start");
computerStart.onclick = function () {
  console.log("THE Game has started!");
  getComputerChoice();
};
