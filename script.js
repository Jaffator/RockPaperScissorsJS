let humanScore = 0;
let pcScore = 0;
let round = 0;

const rock = document.querySelector("#rock");
const sciccors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const playtext = document.querySelector("#playtext");

rock.addEventListener("click", () => play("rock"));
sciccors.addEventListener("click", () => play("scissors"));
paper.addEventListener("click", () => play("paper"));

function updateScore() {
  document.getElementById("pcscore").textContent = pcScore;
  document.getElementById("humanscore").textContent = humanScore;
  document.getElementById("round").textContent = round + "/5";
}

function checkwinner() {
  let winner = "";
  if (humanScore > pcScore) {
    winner = "Human WIN";
  } else if (humanScore < pcScore) {
    winner = "PC WIN";
  } else {
    winner = "DRAW";
  }
  playtext.textContent = winner;
  humanScore = 0;
  pcScore = 0;
  round = 0;
}
function cahoj() {
  console.log("nic nedelam");
}
function playRound(humanChoice, pcChoice) {
  round++;

  if (humanChoice == "paper" && pcChoice == "paper") {
    return "Same choice, no winner";
  } else if (humanChoice == "paper" && pcChoice == "rock") {
    humanScore++;
    return "Paper beat rock, human win";
  } else if (humanChoice == "paper" && pcChoice == "scissors") {
    pcScore++;
    return "Scissors cut paper, pc win";
  } else if (humanChoice == "rock" && pcChoice == "paper") {
    pcScore++;
    return "Paper beat rock, pc win";
  } else if (humanChoice == "rock" && pcChoice == "rock") {
    return "Same choice, no winner";
  } else if (humanChoice == "rock" && pcChoice == "scissors") {
    humanScore++;
    return "Rock crach scissors, human win";
  } else if (humanChoice == "scissors" && pcChoice == "paper") {
    humanScore++;
    return "Scissors cut paper, human win";
  } else if (humanChoice == "scissors" && pcChoice == "rock") {
    pcScore++;
    return "Rock beat scissors, pc win";
  } else if (humanChoice == "scissors" && pcChoice == "scissors") {
    return "Same choice, no winner";
  }
}

// function getHumanChoice(input) {
//   const input = document.getElementById("humanSelect").value;

//   console.log(input.toLowerCase());

function getPcChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber].toLowerCase();
}

function play(humanChoice) {
  const pcChoice = getPcChoice();
  const container = document.querySelector("#pcChoice");
  const existpctext = document.querySelector("#pcChoice p");
  if (existpctext) {
    container.removeChild(existpctext);
  }
  const pctext = document.createElement("p");
  pctext.textContent = "pc: " + pcChoice;
  container.appendChild(pctext);
  const result = playRound(humanChoice, pcChoice);
  updateScore();
  playtext.textContent = result;
  if (round == 5) {
    checkwinner();
  }
}
updateScore();
