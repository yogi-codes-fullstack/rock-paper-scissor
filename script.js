"use strict"

const CHOICES = ['ROCK', 'PAPER', 'SCISSOR'];
let humanScore = 0;
let computerScore = 0;
let playerChoiceInd = 0;
let computerChoiceInd = 0;

const computerChoiceLabel = document.querySelector("#computer-choice");
const playerChoiceLabel = document.querySelector("#player-choice");
const computerScoreLabel = document.querySelector("#computer-score");
const playerScoreLabel = document.querySelector("#player-score");

const btnCompChoice = document.querySelector("#btn-computerChoice");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissor = document.querySelector("#btn-scissor");

const divPlayerButtons = document.querySelector("#player-buttons");


playerChoiceLabel.textContent = CHOICES[0]; // default player's choice is always "ROCK"

btnCompChoice.addEventListener("click", () => {
    computerChoiceInd = Math.floor(Math.random()*3);
    computerChoiceLabel.textContent = CHOICES[computerChoiceInd];
    playRound(playerChoiceInd, computerChoiceInd);
})

// example of event delegation
divPlayerButtons.addEventListener("click", (e) => {
    // console.log(e.target.id);
    switch(e.target.id){
        case "btn-rock":
            playerChoiceInd = 0;
            break;
        case "btn-paper": 
            playerChoiceInd = 1;
            break;
        case "btn-scissor":
            playerChoiceInd = 2;
            break;        
    }
    playerChoiceLabel.textContent = CHOICES[playerChoiceInd];
})



function playRound(playerChoiceInd, computerChoiceInd) {
    
    if ((playerChoiceInd == 0 && computerChoiceInd == 1) || (playerChoiceInd == 1 && computerChoiceInd == 2) || (playerChoiceInd == 2 && computerChoiceInd == 0)){
        console.log('COMPUTER won this ROUND!!');
        computerScore++;        
    } else if ( playerChoiceInd == computerChoiceInd) {
        console.log("ROUND TIED!!");
    } else {
        console.log("YOU won this ROUND!!");
        humanScore++;
    }
    playerScoreLabel.textContent = humanScore;
    computerScoreLabel.textContent = computerScore;
}
