function getComputerChoice() {
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors"
    let selector = Math.floor(Math.random() * 3)
    switch (selector) {
        case 0:
            // console.log(ROCK)
            return ROCK;
            break;
        case 1:
            // console.log(PAPER)
            return PAPER;
            break;
        case 2:
            // console.log(SCISSORS)
            return SCISSORS;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return ("Its a tie! " + playerSelection + " and " + computerSelection + " are equal...");
    }else if ((playerSelection === "rock" && computerSelection === "scissors" || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))) {
        winCounter += 1;
        return ("You win! " + playerSelection + " beats " + computerSelection + "!");
    }else {
        return ("You lose! " + playerSelection + " loses to " + computerSelection + "!");
    }
}

function getPlayerSelection() {

    playerSelection = prompt("Rock Paper or Scissors?")
    return(playerSelection);
}

function playGame() {

    let while_counter = 0;
    while(while_counter < 5){
        computerSelection = getComputerChoice();
        playerSelection = getPlayerSelection();
        console.log(playRound(playerSelection, computerSelection));
        while_counter += 1;
    }
    if(winCounter > 2){
        console.log("You've won! Your Score: " + winCounter);
    }
    else{
        console.log("You've Lost :( Your Score: " + winCounter)
    }
    
}

let winCounter = 0;
let playerSelection;
let computerSelection = getComputerChoice();
playGame();