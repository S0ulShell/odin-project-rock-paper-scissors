const rock = "rock";
const paper = "paper";
const scissors = "scissors";





function getComputerChoice() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors"
    let selector = Math.floor(Math.random() * 3)
    switch (selector) {
        case 0:
            // console.log(ROCK)
            return rock;
            break;
        case 1:
            // console.log(PAPER)
            return paper;
            break;
        case 2:
            // console.log(SCISSORS)
            return scissors;
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return ("Its a tie! " + playerSelection + " and " + computerSelection + " are equal...");
    } else if ((playerSelection === "rock" && computerSelection === "scissors" || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))) {
        winCounter += 1;
        document.getElementById('winCounter').innerHTML = winCounter;
        return ("You win! " + playerSelection + " beats " + computerSelection + "!");
    } else {
        lossCounter += 1;
        document.getElementById("lossCounter").innerHTML = lossCounter;
        return ("You lose! " + playerSelection + " loses to " + computerSelection + "!");
    }
}

function getPlayerSelection(string) {
    playerSelection = string;
    console.log(playerSelection);
    return playerSelection;
}

function playGame(playerSelection) {
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    if (winCounter < 5 || lossCounter < 5){ 
        document.getElementById("message").innerHTML = "";
    }

    if (winCounter == 5 || lossCounter == 5) {
        if (winCounter > lossCounter) {
            document.getElementById("message").innerHTML = "You win! You scored " + winCounter + " and lost " + lossCounter + "!";
            winCounter = 0;
            lossCounter = 0;
            document.getElementById("lossCounter").innerHTML = lossCounter;
            document.getElementById('winCounter').innerHTML = winCounter;
        } else if (winCounter < lossCounter) {
            document.getElementById("message").innerHTML = "You lose! You scored " + winCounter + " and lost " + lossCounter + "!";
            winCounter = 0;
            lossCounter = 0;
            document.getElementById("lossCounter").innerHTML = lossCounter;
            document.getElementById('winCounter').innerHTML = winCounter;
        } else if (winCounter == lossCounter) {
            document.getElementById("message").innerHTML = "It's a tie! You scored " + winCounter + " and lost " + lossCounter + "!";
            winCounter = 0;
            lossCounter = 0;
            document.getElementById("lossCounter").innerHTML = lossCounter;
            document.getElementById('winCounter').innerHTML = winCounter;
        }
    }
}

let winCounter = 0;
document.getElementById('winCounter').innerHTML = winCounter; 
let lossCounter = 0;
document.getElementById("lossCounter").innerHTML = lossCounter;
let playerSelection;
let computerSelection = getComputerChoice();



const rockBtn = document.querySelector("#rockButton");
rockBtn.addEventListener("click", () => { getPlayerSelection(rock) });
rockBtn.addEventListener("click", () => { playGame(playerSelection) })

const paperBtn = document.querySelector("#paperButton");
paperBtn.addEventListener("click", () => { getPlayerSelection(paper) });
paperBtn.addEventListener("click", () => { playGame(playerSelection) })

const scissorBtn = document.querySelector("#scissorButton");
scissorBtn.addEventListener("click", () => { getPlayerSelection(scissors) });
scissorBtn.addEventListener("click", () => { playGame(playerSelection) })
