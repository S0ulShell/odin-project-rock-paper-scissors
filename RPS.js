function getComputerChoice(){
    const ROCK = "Rock";
    const PAPER = "Paper";
    const SCISSORS = "Scissors"
    let selector = Math.floor(Math.random() * 3)
    switch(selector){
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
