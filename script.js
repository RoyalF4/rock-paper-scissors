function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3)
  if(choice === 0) {
    return 'rock';
  } else if(choice === 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function getHumanChoice() {
  let choice = prompt('Enter rock, paper, or scissors:').toLocaleLowerCase().trim();
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if(computerChoice === humanChoice) {
    console.log("It's a tie!")
  } else if(computerChoice  === 'rock' && humanChoice === 'paper') {
    console.log("You win! Paper beats Rock!");
    humanScore++;
  } else if(computerChoice === 'rock' && humanChoice === 'scissors') {
    console.log("You lose! Rock beats Scissors!");
    computerScore++;
  } else if(computerChoice === 'paper' && humanChoice === 'rock') {
    console.log("You lose! Paper beats Rock!");
    computerScore++;
  } else if(computerChoice === 'paper' && humanChioce === 'scissors') {
    console.log("You win! Scissors beat Paper!");
    humanScore++;
  } else if(computerChoice === 'scissors' && humanChoice === 'rock') {
    console.log("You win! Rock beats scissors!");
    humanScore++;
  } else if(computerChoice === 'scissors' && humanChoice === 'paper') {
    console.log("You lose! Scissors beat Paper!");
    computerScore++;
  }
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  if(computerScore === humanScore) {
    console.log(`The final score was tied at ${computerScore} to ${humanScore}`);
  } else if(computerScore > humanScore) {
    console.log(`You lost! The score was ${computerScore} to ${humanScore}`)
  } else {
    console.log(`You won! The score was ${humanScore} to ${computerScore}`)
  }
}

playGame();