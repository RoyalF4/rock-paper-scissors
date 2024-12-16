const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsText = document.querySelector('#results');
const humanScoreText = document.querySelector('#humanScore');
const computerScoreText = document.querySelector('#computerScore');
const outcomeText = document.querySelector('#outcome');

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
    resultsText.textContent = "It's a tie!";
  } else if(computerChoice  === 'rock' && humanChoice === 'paper') {
    resultsText.textContent = "You win! Paper beats Rock!";
    humanScore++;
  } else if(computerChoice === 'rock' && humanChoice === 'scissors') {
    resultsText.textContent = "You lose! Rock beats Scissors!";
    computerScore++;
  } else if(computerChoice === 'paper' && humanChoice === 'rock') {
    resultsText.textContent = "You lose! Paper beats Rock!";
    computerScore++;
  } else if(computerChoice === 'paper' && humanChoice === 'scissors') {
    resultsText.textContent = "You win! Scissors beat Paper!";
    humanScore++;
  } else if(computerChoice === 'scissors' && humanChoice === 'rock') {
    resultsText.textContent = "You win! Rock beats scissors!";
    humanScore++;
  } else if(computerChoice === 'scissors' && humanChoice === 'paper') {
    resultsText.textContent = "You lose! Scissors beat Paper!";
    computerScore++;
  }

  humanScoreText.textContent = `You: ${humanScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;

  if(humanScore === 5 || computerScore === 5) {
      if(humanScore === 5) {
        outcomeText.textContent = 'You are the winner!';
      } else if(computerScore === 5) {
        outcomeText.textContent = 'You are the loser!'
      }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener('click', () => {
      rockBtn.disabled = false;
      paperBtn.disabled = false;
      scissorsBtn.disabled = false;
      humanScore = 0;
      computerScore = 0;
      outcomeText.textContent = '';
      humanScoreText.textContent = `You: ${humanScore}`;
      computerScoreText.textContent = `Computer: ${computerScore}`;
      resultsText.textContent = 'Select your choice!';
      document.querySelector('body').removeChild(resetBtn);
    })
    document.querySelector('body').appendChild(resetBtn);
  }

}

rockBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'rock')
})

paperBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'paper')
})

scissorsBtn.addEventListener('click', () => {
  playRound(getComputerChoice(), 'scissors')
})