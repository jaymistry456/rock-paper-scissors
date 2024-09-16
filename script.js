let humanScore = 0;
let computerScore = 0;

const getHumanChoice = () => {
    return window.prompt('Enter your choice: ').toLowerCase();
}

const getComputerChoice = () => {
    const randomNumber = Math.random();
    if(randomNumber <= 0.33) {
        return 'rock';
    }
    else if(randomNumber > 0.33 && randomNumber <= 0.66) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

const playRound = (humanChoice, computerChoice) => {
    const loseString = 'You lose! ';
    const winString = 'You win! ';
    const rockAndPaper = 'Paper beats Rock';
    const rockAndScissors = 'Rock beats Scissors';
    const paperAndScissors = 'Scissors beats Paper';

    if(humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(loseString + rockAndPaper);
        computerScore = computerScore + 1;
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(winString + rockAndPaper);
        humanScore = humanScore + 1;
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(winString + rockAndScissors);
        humanScore = humanScore + 1;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(loseString + rockAndScissors);
        computerScore = computerScore + 1;
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(loseString + paperAndScissors);
        computerScore = computerScore + 1;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(loseString + rockAndScissors);
        humanScore = humanScore + 1;
    }
    else {
        console.log('This Round is Tied!');
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
    }
}

const playGame = () => {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log('Your Score: ' + humanScore);
    console.log('Computer Score: ', computerScore);
    if(humanScore > computerScore) {
        console.log('You Win the Game!');
    }
    else if (humanScore < computerScore) {
        console.log('Computer Wins the Game!');
    }
    else {
        console.log('Game Tied!');
    }
}

playGame();