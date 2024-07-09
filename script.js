"use strict"

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissor'];
    let randIndex = Math.floor(Math.random()*3);
    return choices[randIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice(rock/paper/scissor): ");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`Computer Choice: ${computerChoice}, Human Choice: ${humanChoice}`);
    
    if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissor') || (humanChoice == 'scissor' && computerChoice == 'rock')){
        console.log('COMPUTER won this ROUND!!');
        computerScore++;        
    } else if ( humanChoice == computerChoice) {
        console.log("ROUND TIED!!");
    } else {
        console.log("YOU won this ROUND!!");
        humanScore++;
    }

    console.log(`SCORE \nComputer: ${computerScore}         Human: ${humanScore}`);
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore >= computerScore){
        console.log("YOU WIN THE GAME. CONGRATULATIONS !!!");
    }
    else {
        console.log("ALAS! You LOST the GAME!!!");
    }
}

playGame();