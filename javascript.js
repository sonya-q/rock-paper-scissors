let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let computerChoice = Math.random();
  if (computerChoice<1/3){
    return "rock";
  }
  else if (computerChoice<2/3){
    return "paper";
  }
  else {
    return "scissors";
  }
}

console.log(getComputerChoice())

function getHumanChoice(){
  let humanChoice = prompt("Enter your choice: Rock, Paper, or Scissors?");
  return humanChoice;
}

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase()

  if ((humanChoice === "rock" && computerChoice === "scissors") || 
  (humanChoice === "scissors" && computerChoice === "paper") || 
  (humanChoice === "paper" && computerChoice === "rock")) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
    humanScore++;
  }

  else if (humanChoice === computerChoice) {
    console.log (`You tied! Both you and the computer chose ${humanChoice}`);
  }

  else {
    console.log (`You lost! ${computerChoice} beats ${humanChoice}`)
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))

console.log(`Score - You: ${humanScore}; Computer: ${computerScore}`)