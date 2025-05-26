let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) return "win";
  return "lose";
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);

  let resultText = `You chose ${playerChoice}, computer chose ${computerChoice}.<br>`;

  if (result === "win") {
    playerScore++;
    resultText += "<strong>You win!</strong>";
  } else if (result === "lose") {
    computerScore++;
    resultText += "<strong>You lose!</strong>";
  } else {
    resultText += "<strong>It's a tie!</strong>";
  }

  document.getElementById("result").innerHTML = resultText;
  document.getElementById("score").textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}