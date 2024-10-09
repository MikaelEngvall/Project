let humanScore = 0;
let computerScore = 0;

// Function to randomly get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to play a single round and update the score
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  let resultText = "";

  if (humanChoice === computerChoice) {
    resultText = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else {
    resultText = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }

  // Display the result of this round
  document.getElementById("result").innerHTML = `<p>${resultText}</p>`;

  // Update the score
  updateScore();
}

// Function to update and display the score
function updateScore() {
  const scoreText = `Human: ${humanScore} | Computer: ${computerScore}`;
  document.getElementById("score").innerHTML = `<p>${scoreText}</p>`;
}

// Function to handle the human choice and play a round
function handleChoice(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
