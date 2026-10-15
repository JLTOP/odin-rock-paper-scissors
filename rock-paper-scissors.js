function getComputerChoice(){
    let computerRNG = Math.floor(Math.random() * 3)
    let computerChoice = computerRNG
    if (computerRNG == 2){
        return "rock";
    } else if (computerRNG == 1){
        return "paper";
    } else if (computerRNG == 0){
        return "scissors";
    };
}

function getHumanChoice(){
    let humanChoice = window.prompt("choose rock, paper, scissors", "");
    return humanChoice.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if(humanChoice == "rock" && computerChoice == "scissors"){
        let roundMessage = "Player's rock crushes Computer's scissors!";
        humanScore ++;
        console.log(roundMessage + " The score is now Player:" + humanScore + " to Computer:" + computerScore);
    } else if(humanChoice == "scissors" && computerChoice == "paper"){
        let roundMessage = "Player's scissors slices Computer's paper!";
        humanScore ++;
        console.log(roundMessage + " The score is now Player:" + humanScore + " to Computer:" + computerScore);
    } else if(humanChoice == "paper" && computerChoice == "rock"){
        let roundMessage = "Player's paper smothers Computer's rock!";
        humanScore ++;
        console.log(roundMessage + " The score is now Player:" + humanScore + " to Computer:" + computerScore);
    } else if(humanChoice == "rock" && computerChoice == "paper"){
        let roundMessage = "Player's rock is smothered by Computer's paper!";
        computerScore ++;
        console.log(roundMessage + " The score is now Player:" + humanScore + " to Computer:" + computerScore);
    } else if(humanChoice == "paper" && computerChoice == "scissors"){
        let roundMessage = "Player's paper is sliced by Computer's scissors!";
        computerScore ++;
        console.log(roundMessage + " The score is now Player:" + humanScore + " to Computer:" + computerScore);
    }  else if(humanChoice == "scissors" && computerChoice == "rock"){
        let roundMessage = "Player's scissors is crushed by Computer's rock!";
        computerScore ++;
        console.log(roundMessage + " The score is now Player:" + humanScore + " to Computer:" + computerScore);
    }  else if(humanChoice == "rock" && computerChoice == "rock"){
        let roundMessage = "Player's rock and Computer's rock are evenly matched! Play this round again!";
        console.log(roundMessage + "The score is now Player:" + humanScore + " to Computer:" + computerScore);
        return playRound();
    }  else if(humanChoice == "paper" && computerChoice == "paper"){
        let roundMessage = "Player's paper and Computer's paper are evenly matched! Play this round again!";
        console.log(roundMessage + "The score is now Player:" + humanScore + " to Computer:" + computerScore);
        return playRound();
    }  else if(humanChoice == "scissors" && computerChoice == "scissors"){
        let roundMessage = "Player's scissors and Computer's scissors are evenly matched! Play this round again!";
        console.log(roundMessage + "The score is now Player:" + humanScore + " to Computer:" + computerScore);
        return playRound();
    } else {
        console.log("Please choose 'rock', 'paper', or 'scissors' only!")
        return playRound();
    }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore){
        return console.log("Player Wins");
    }else if (computerScore > humanScore){
        return console.log("Computer Wins");
    }

}

playGame();


/**
function playRound(humanChoice, computerChoice)
// take humanchoice and computerchoice and decide who the winner is
// return the representing round winner
// increment the score
**/