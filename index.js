let playerScore = 0;
let computerScore = 0;
let playerName = '';

function getPlayerName() {
  const name = prompt('Please, enter your name');
  return name || "User";
}

function getUserChoice() {
  const userChoice = prompt(`${playerName}, Rock, Scissors, Paper... Please make your move`).toLowerCase();
  if (userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper') {
    return userChoice;
  } else {
    return getUserChoice();
  }
}

function getComputerChoice() {
  const choices = ['rock', 'scissors', 'paper'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return getUserChoice();
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === "scissors" && computerChoice === 'paper') ||
    (userChoice === "paper" && computerChoice === 'rock')
  ) {
    playerScore++;
    alert (`You won this round: Current count is ${playerName}: ${playerScore}: Computer ${computerScore}`);
  } else {
    computerScore++;
    alert (`Computer won this round: Current count is ${playerName}: ${playerScore}: Computer ${computerScore}`);
  }
}

function playGame() {
  playerName = getPlayerName();
  
  while (playerScore < 3 && computerScore < 3) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
    alert(`Computer move is: ${computerChoice}`);
  }

  if (playerScore > computerScore) {
    alert(`Congratulations. You won this game. Count - You: ${playerScore} : Computer: ${computerScore}`);
  } else {
    alert(`Sorry. You lost this game. Count - You: ${playerScore} : Computer: ${computerScore}`);
  }

  if (confirm("Do you want to start a new game?")) {
    resetGame();
    playGame();
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
}

playGame();
