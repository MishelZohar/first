function getComputerChoice(){
    let rnd = Math.floor(Math.random() * 3) // Returns a random int between 0-2
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
    else if(lowerPlayerSelection === "paper" && computerSelection === "scissors"){
        winState = "You Lose! Scissors beats Paper";
    }
    else if(lowerPlayerSelection === "rock" && computerSelection === "paper"){
        winState = "You Lose! Paper beats Rock";
    }
    else if(lowerPlayerSelection === "scissors" && computerSelection === "rock"){
        winState = "You Lose! Rock beats Scissors";
    }
    else{
        winState = "That's a tie";
    }
    return winState;
}

function game(e){


    if(e.target.nodeName === 'BUTTON'){
        let win = playRound(e.srcElement.id, getComputerChoice());
        if(win[4] === "W"){
            playerScore++;
        }
        else if(win[4] === "L"){
            computerScore++;
        }
        div.innerHTML = win + "<br>Your Score: " + playerScore + "<br>Computer Score: " + computerScore;
        if(playerScore === 5){
            div.innerHTML = "You Win!";
            return;
        }
        if(computerScore === 5){
            div.innerHTML = "You Lose!";
            return;
        }

        body.appendChild(div);
    }
}

let playerScore = 0;
let computerScore = 0;

const body = document.querySelector("#bod");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
rock.id = "rock";

paper.textContent = "Paper";
paper.id = "paper";

scissors.textContent = "Scissors";
scissors.id = "scissors";

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

const div = document.createElement("div");


window.addEventListener('click', game);

