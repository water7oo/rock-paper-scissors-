//create a game function
//get the player and computers inputs
//make decide who wins depending on their inputs
//stop the loop when the point counter is = to 3 or 5

//Get all this code displayed the website, redo website structure

///////Display all this on the webpage
//////////Fix rounds not counting up, fix counter,
////////Figure out why log breaks after 1 iteration

// function game() {
//   let arena = document.getElementById("rps");
//   var playerOption = document.getElementById("inputRandom").value; //Human inputs

//   if (playerOption > 10 || playerOption < 1 || playerOption === null) {
//     arena.innerHTML = "That number is not between 1-10, try again!";
//     console.log("That number is not from 1-10, try again!");
//     if (playerOption <= 10) {
//       arena.innerHTML =
//         "Welcome to the numbers game!" +
//         "<br>" +
//         "Please enter a number between 1-10";
//     }
//   }
//   let rounds = 7;
//   var pscore = 0;
//   var cscore = 0;
//   for (let i = 1; i < rounds; i++) {
//     break;
//     //Loop the rounds
//     console.log("Round " + i);
//     let arena = document.getElementById("rps");
//     arena.innerHTML += "Round " + i + "<br>";

//     //var playerOption = Math.floor((Math.random() * 10) | 0);  //CPU player
//     document.getElementById("rps-computer-area").innerHTML = playerOption;
//     var playerOption = document.getElementById("inputRandom").value; //Human inputs
//     var computerOption = Math.floor((Math.random() * 10) | 0);

//     if (playerOption == "Play Game") {
//       console.log(
//         "Welcome the Number guesser! " + " Please Enter a number from 1-10"
//       );
//     }
//     //the next block of code to run if player enters the string
//     if (playerOption <= 10) {
//       console.log("Player has entered a number that was 10 or less");
//     }

//     if (playerOption > computerOption) {
//       playerWon = true;
//       computerWon = false;
//       arena.innerHTML +=
//         "Player chose: " +
//         playerOption +
//         " and Computer chose: " +
//         computerOption +
//         "<br>";
//       console.log(
//         "Player chose: " +
//           playerOption +
//           " and Computer chose: " +
//           computerOption
//       );
//       console.log("---Player has won--- You gained " + pscore + " point(s)");
//     } else if (computerOption > playerOption) {
//       playerWon = false;
//       computerWon = true;
//       arena.innerHTML +=
//         "Player chose: " +
//         playerOption +
//         " and Computer chose: " +
//         computerOption +
//         "<br>";
//       console.log(
//         "Player chose: " +
//           playerOption +
//           " and Computer chose: " +
//           computerOption
//       );
//       console.log(
//         "----Computer has won---- They earned " + cscore + " point(s)"
//       );
//     } else if (playerOption == computerOption) {
//       playerWon = false;
//       computerWon = false;
//       arena.innerHTML +=
//         "Both players have chosen the same option" +
//         "Player score: " +
//         pscore +
//         " Computer score: " +
//         cscore +
//         "<br>";
//       console.log("Both players have chosen the same option");
//     }

//     //scoring

//     if (playerWon == true && computerWon == false) {
//       pscore += 1;
//       arena.innerHTML +=
//         "Player score: " + pscore + " Computer score: " + cscore + "<br>";
//       console.log("Player score: " + pscore, "Computer score: " + cscore);
//     } else if (playerWon == false && computerWon == true) {
//       cscore += 1;
//       arena.innerHTML +=
//         "Player score: " +
//         pscore +
//         "<br>" +
//         "Computer score: " +
//         cscore +
//         "<br>";
//       console.log("Player score: " + pscore, "Computer score: " + cscore);
//     }
//     if (pscore == 3 || cscore == 3) {
//       arena.innerHTML +=
//         "The game is over!" +
//         " Final Player score: " +
//         pscore +
//         " Final Computer score: " +
//         cscore +
//         "<br>";
//       console.log("The game is over!");
//       break;
//     } else if (i == 5 && pscore == 2 && cscore == 2) {
//       rounds = 7;
//     }
//     break;
//   }
// }

//var playerOption = document.getElementById("inputRandom").value; //Human inputs
let arena = document.getElementById("rps");
var playerSelection = getInput();
var computerSelection = getComputerInput();
var rpsGame = game();
let gameStarted = true;
let check = inputCheck();

if (rpsGame == undefined) {
  arena.innerHTML = "Click start";
}

var clicked = false;
document.getElementById("startGame").addEventListener("click", function () {
  clicked = true;
  arena.innerHTML =
    " Game Begin " +
    " please enter choose, rock paper, or scissors! " +
    " Computer Selection: " +
    computerSelection.toUpperCase();

  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    return "player has entered a value";
  }
});

document.getElementById("Enter").addEventListener("click", function () {
  clicked = true;
  arena.innerHTML = "Enter Button was clicked";
  arena.innerHTML = check;
});

function inputCheck() {
  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    return "player has entered a value";
  }
}
function game(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player has won";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player has won";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player has won";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer has won";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer has won";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer has won";
  }
}
//Grabs computer Input
function getComputerInput() {
  const rps = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * rps.length);
  let randomrps = rps[random];
  randomrps = randomrps.toLocaleLowerCase();
  console.log(randomrps);
  return randomrps;
}
//Grabs player input from form
function getInput() {
  var formInput = document.getElementById("inputRandom").value;
  formInput = formInput.toLowerCase();
  document.getElementById("rps").innerHTML = formInput;

  if (formInput == "") {
    return formInput;
  } else {
    console.log(formInput);
    return formInput;
  }
}
