console.log("Hello World");

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];

}

function getHumanChoice(){
    let choice = prompt("Enter Rock paper or scissors");
    return choice.toLowerCase();

}

function playGame(){
    let humanScore = 0 ;
    let computerScore = 0;


    function playRound(humanChoice,computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }


    
    

    const humanWins = 
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock');

    if (humanWins) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

    for(let round = 1;round <= 5;round++){
        console.log(`Round ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log("Game Over Final scores");
    console.log(`You: ${humanScore} - Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}


playGame();

