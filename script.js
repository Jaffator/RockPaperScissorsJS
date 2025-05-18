let humanScore = 0;
let pcScore = 0;
let round = 0;

function updateScore() {
  document.getElementById("pcscore").textContent = pcScore;
  document.getElementById("humanscore").textContent = humanScore;
  document.getElementById("round").textContent = round + "/5";
}
function addfce() {
  console.log("ahoj");
}
function checkwinner() {
  if (humanScore > pcScore) {
    alert("Human WIN");
  } else if (humanScore < pcScore) {
    alert("PC WIN");
  } else {
    alert("plichta");
  }
  humanScore = 0;
  pcScore = 0;
  round = 0;
}

function playRound(humanChoice, pcChoice) {
  round++;
  if (round > 5) {
    checkwinner();
    return;
  }
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

function getHumanChoice() {
  const input = document.getElementById("humanSelect").value;
  return input.toLowerCase();
}

function getPcChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber].toLowerCase();
}

function play() {
  const humanChoice = getHumanChoice();
  console.log(humanChoice);
  const pcChoice = getPcChoice();
  const result = playRound(humanChoice, pcChoice);
  alert(result);
  updateScore();
}
updateScore();
