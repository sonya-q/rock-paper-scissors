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
// function getHumanChoice(){
//   let humanChoice = prompt("Enter your choice: Rock, Paper, or Scissors?");
//   return humanChoice;
// }
const runningScore = document.querySelector("#runningScore");


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// before event delegation

rock.addEventListener("click", () => {
  const humanChoice = 'rock';
  playRound(humanChoice, getComputerChoice())
})

paper.addEventListener("click", () => {
  const humanChoice = 'paper';
  playRound(humanChoice, getComputerChoice())
})

scissors.addEventListener("click", () => {
  const humanChoice = 'scissors';
  playRound(humanChoice, getComputerChoice())
})

// function playGame(){
//   let humanScore = 0;
//   let computerScore = 0;

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

  if (humanChoice === computerChoice){
    runningScore.innerHTML += `<p>It's a tie! You both chose ${humanChoice}!</p>`
    return "tie";
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")
  
  if (humanWins) {
    runningScore.innerHTML += `<p>You win! ${humanChoice} beats ${computerChoice}!</p>`
    humanScore++;
    return result = "human";
  }
  else {
    runningScore.innerHTML += `<p>You lose... ${computerChoice} beats ${humanChoice}!</p>`
    computerScore++;
    return result = "computer";
  }

}
  
// for (let round = 1; round <=5; round++) 
// for (let round = 1; round <= 1; round++){
// console.log(`Round ${round}`);
// const computerSelection = getComputerChoice();
// const result = playRound(humanChoice, computerSelection);

// if (result === "human"){
// humanScore++;
// }
// else if (result === "computer"){
// computerScore++;
// }

function showScores(){
  console.log(`Your score: ${humanScore}; Computer score: ${computerScore}`)
}

// console.log(`Game Over!`)
// if (humanScore > computerScore) {
//   console.log (`Congratulations! You won! Your score is: ${humanScore} and the computer's score is ${computerScore}`)
// }

// else if (humanScore < computerScore) {
//   console.log (`No! You lost...Your score is: ${humanScore} and the computer's score is ${computerScore}`)
// }

// else {
//   console.log (`You tied! You and the computer both got: ${computerScore} points`)
// }
// }