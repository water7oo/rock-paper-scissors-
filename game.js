var computerSelection = getComputerInput();
var playerSelection;
var rpsGame = game();
let gameStarted = false;
let roundsPlayed = 1;
let winsObtained = 0;
let lossesObtained = 0;

document.getElementById("rps-computer-area").innerHTML = "Waiting on CPU...";
document.getElementById("winner").innerHTML = "";
document.getElementById("winsContainer").innerHTML = "Wins: " + winsObtained;
document.getElementById("loserContainer").innerHTML =
  "Losses: " + lossesObtained;

document.getElementById("roundCount").innerHTML = "Make Your Move!";

// Adds event listeners to buttons
document.getElementById("player-rock").addEventListener("click", function () {
  setPlayerInput("rock");
  if (playerSelection) {
    const computerSelection = getComputerInput();
    console.log(game(playerSelection, computerSelection));
    updateScores();
    document.getElementById("roundCount").innerHTML = "Round " + roundsPlayed++;
  }
});

document.getElementById("player-paper").addEventListener("click", function () {
  setPlayerInput("paper");
  if (playerSelection) {
    const computerSelection = getComputerInput();
    console.log(game(playerSelection, computerSelection));
    updateScores();
    document.getElementById("roundCount").innerHTML = "Round " + roundsPlayed++;
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
      document.getElementById("roundCount").innerHTML =
        "Round " + roundsPlayed++;
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

  //Point distribution
  if (resultsDiv == "Player has won") {
    playerScore++;
  } else if (resultsDiv == "Computer has won") {
    computerScore++;
  }

  //Updates the win count and loss count
  if (playerScore == 3 || computerScore == 3) {
    //Checks if either player or computer has reached 3 points
    if (playerScore == 3) {
      winsObtained++;
      document.getElementById("winsContainer").innerHTML =
        "Wins: " + winsObtained;
    }
    if (computerScore == 3) {
      lossesObtained++;
      document.getElementById("loserContainer").innerHTML =
        "Losses: " + lossesObtained;
    }
    //Resets the scores and rounds played count
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 1;
  }

  //Updates scores on website
  document.getElementsByClassName(
    "player-score"
  )[0].textContent = ` ${playerScore}`;
  document.getElementsByClassName(
    "computer-score"
  )[0].textContent = ` ${computerScore}`;
}
