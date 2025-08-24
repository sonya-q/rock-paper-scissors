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

console.log(getHumanChoice())