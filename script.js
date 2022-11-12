function getComputerChoice(){
    let rnd = Math.floor(Math.random * 3) // Returns a random int between 0-2
    let choice;
    if(rnd === 0){
        choice = "rock";
    }
    else if(rnd === 1){
        choice = "paper";
    }
    else{
        choice = "scissors"
    }
    return choice;
}


function playRound(playerSelection, computerSelection){
    let winState;
    let lowerPlayerSelection = playerSelection.toLowerCase();

    if (lowerPlayerSelection === "rock" && computerSelection === "scissors"){
        winState = "You Win! Rock beats Scissors";
    }
    else if(lowerPlayerSelection === "paper" && computerSelection === "rock"){
        winState = "You Win! Paper beats Rock"; 
    }
    else if(lowerPlayerSelection === "scissors" && computerSelection === "paper"){
        winState = "You Win! Scissors beats Paper";
    }
    else if(lowerPlayerSelection === "scissors" && computerSelection === "rock")
    {
        winState = "You Lose! Scissors beats Paper";
    }
    else if(lowerPlayerSelection === "rock" && computerSelection === "paper"){
        winState = "You Lose! Paper beats Rock";
    }
    else{
        winState = "You Lose! Rock beats Scissors";
    }
    return winState;
}


function game(){
    let score = 0;
    let winState;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please enter Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        winState = playRound(playerSelection, computerSelection);
        if (winState[4] === "W"){
            score +=1 ;
        }    
        console.log(winState);
    }
    console.log(score);
}


game();