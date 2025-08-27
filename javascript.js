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

const runningScore = document.querySelector("#runningScore");
const roundResults = document.querySelector("#roundResults");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector('#results');

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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

  if (humanChoice === computerChoice){
    roundResults.innerHTML += `<p>It's a tie! You both chose ${humanChoice}!</p>`
    updateRoundResults();
    checkWinner();
    return "tie";
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")
  
  if (humanWins) {
    roundResults.innerHTML += `<p>You win! ${humanChoice} beats ${computerChoice}!</p>`
    humanScore++;
    updateRoundResults();
    checkWinner();
    return result = "human";
  } 
  else {
    roundResults.innerHTML += `<p>You lose... ${computerChoice} beats ${humanChoice}!</p>`
    computerScore++;
    updateRoundResults();
    checkWinner();
    return result = "computer";
  }

}
  

function updateRoundResults(){
  runningScore.textContent = `Running Score - You: ${humanScore}; Computer: ${computerScore}`;
}


function checkWinner(){
  if (humanScore === 5 || computerScore === 5){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    if (humanScore > computerScore){
      results.textContent = `Game over! You won! You scored 5 points, and the computer scored ${computerScore}`;
    }
    else {
      results.textContent = `Game over! You lost... The computer scored 5 points, and you scored ${humanScore}`;
    }

    return true;
}
}
