//Pseudo Code:
//Player presses start
//If both player and cpu variables contain a string, run the winDecide() function
//If either player or cpu reach 5 points, run the winners name on screen with a restart button

var computerSelection = getComputerInput();
var playerSelection;
var rpsGame = game();
let gameStarted = false;

document.getElementById("rps-computer-area").innerHTML = "Waiting on CPU...";
document.getElementById("winner").innerHTML = "";

// Adds event listeners to buttons
document.getElementById("player-rock").addEventListener("click", function () {
  setPlayerInput("rock");
  if (playerSelection) {
    const computerSelection = getComputerInput();
    console.log(game(playerSelection, computerSelection));
    updateScores();
  }
});

document.getElementById("player-paper").addEventListener("click", function () {
  setPlayerInput("paper");
  if (playerSelection) {
    const computerSelection = getComputerInput();
    console.log(game(playerSelection, computerSelection));
    updateScores();
  }
});

document
  .getElementById("player-scissors")
  .addEventListener("click", function () {
    setPlayerInput("scissors");
    if (playerSelection) {
      const computerSelection = getComputerInput();
      console.log(game(playerSelection, computerSelection));
      updateScores();
    }
  });

// Sets player input
function setPlayerInput(input) {
  playerSelection = input.toLowerCase();
  console.log(playerSelection);
  document.getElementById("rps-player-area").innerHTML = input;
}

//Grabs computer Input
function getComputerInput() {
  const rps = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * rps.length);
  let randomrps = rps[random];
  randomrps = randomrps.toLocaleLowerCase();
  document.getElementById("rps-computer-area").innerHTML = randomrps;
  console.log(randomrps);
  return randomrps;
}

function playGame() {
  if (playerSelection && !gameStarted) {
    gameStarted = true;
    computerSelection = getComputerInput();
    console.log(game(playerSelection, computerSelection));
    document.getElementById("winner").innerHTML = game(
      playerSelection,
      computerSelection
    );
  }
  updateScores();
}

//Game Function
function game(playerSelection, computerSelection) {
  let results;
  // getComputerInput();
  if (playerSelection === computerSelection) {
    results = "DRAW";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    results = "Player has won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    results = "Player has won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    results = "Player has won";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    results = "Computer has won";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    results = "Computer has won";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    results = "Computer has won";
  }

  let roundsPlayed = 0;
  //update rounds played
  roundsPlayed++;

  // // check if someone has won best of 5
  // if (playerScore === 5 || computerScore === 5) {
  //   if (playerScore > computerScore) {
  //     scoreElement.textContent += "\n\nPlayer wins best of 5!";
  //   } else {
  //     scoreElement.textContent += "\n\nComputer wins best of 5!";
  //   }
  // }

  //Displays results in the results div
  let resultsElement = document.getElementById("winner");
  resultsElement.innerHTML = results;

  return results;
}

//Score Count
let playerScore = 0;
let computerScore = 0;
function updateScores() {
  let resultsDiv = document.getElementById("winner").innerHTML;

  if (resultsDiv == "Player has won") {
    playerScore++;
  } else if (resultsDiv == "Computer has won") {
    computerScore++;
  }

  if (playerScore == 3) {
    playerScore = 0;
    console.log("Player has won the game!");
  } else if (computerScore == 3) {
    computerScore = 0;
    console.log("Computer has won the game!");
  }

  document.getElementsByClassName(
    "player-score"
  )[0].textContent = ` ${playerScore}`;
  document.getElementsByClassName(
    "computer-score"
  )[0].textContent = ` ${computerScore}`;
}
