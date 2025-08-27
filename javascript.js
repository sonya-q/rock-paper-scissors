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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("scissors");

// before event delegation



// function playGame(){
//   let humanScore = 0;
//   let computerScore = 0;

function playRound(humanChoice, computerChoice){
humanChoice = humanChoice.toLowerCase()

  if (humanChoice === computerChoice){
    console.log(`It's a tie! You both chose ${humanChoice}`);
    return "tie";
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")
  
  if (humanWins) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return result = "human";
  }
  else {
    console.log(`You lose... ${computerChoice} beats ${humanChoice}`);
    return result = "computer";
  }
}
  
// for (let round = 1; round <=5; round++) 
for (let round = 1; round <= 1; round++){
console.log(`Round ${round}`);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);

if (result === "human"){
humanScore++;
}
else if (result === "computer"){
computerScore++;
}
}

console.log(`Game Over!`)
if (humanScore > computerScore) {
  console.log (`Congratulations! You won! Your score is: ${humanScore} and the computer's score is ${computerScore}`)
}

else if (humanScore < computerScore) {
  console.log (`No! You lost...Your score is: ${humanScore} and the computer's score is ${computerScore}`)
}

else {
  console.log (`You tied! You and the computer both got: ${computerScore} points`)
}
// }

playRound();