let getComputerChoice = () => {
    let randomInt = Math.floor(Math.random() * 3) + 1

    switch (randomInt) {
        case 1:
            result = 'rock';
            break;
        case 2:
            result = 'paper';
            break;
        case 3:
            result = 'scissors';
            break;
    };

    return result;
};

let playerChoice = () => {
    let input = prompt('Choose your move!').toLowerCase();

    while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
        input = prompt('Choose between "rock", "paper" and "scissors"!').toLowerCase();
    };

    return input;
};

let playRound = function(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) return 'draw';

    switch (playerSelection) {
        case 'rock':
            if(computerSelection === 'paper') {
                return 'loss';
            } else if (computerSelection === 'scissors') {
                return 'win';
            };
            break;
        case 'paper':
            if(computerSelection === 'rock') {
                return 'win';
            } else if (computerSelection === 'scissors') {
                return 'loss';
            };
            break;
        case 'scissors':
            if(computerSelection === 'rock') {
                return 'loss';
            } else if (computerSelection === 'paper') {
                return 'win';
            };
            break;
        default:
            alert('something went wrong')
            return 'draw';
    };
}

const container = document.querySelector('#container');
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 3; i++) {
    let newButton = document.createElement('button');
    newButton.style = 'background-color: blue;width:200px; height:70px; color:white; font-size: 20px;';

    let buttonText = '';
    if (i === 0) {
        buttonText = 'Rock';
    } else if (i === 1) {
        buttonText = 'Paper';
    } else {
        buttonText = 'Scissors';
    };
    newButton.innerText = buttonText;

    newButton.addEventListener('click', function(e) {
        let choice = e.target.innerText.toLowerCase();
        let roundResults = playRound(choice, getComputerChoice());
        if (roundResults === 'win') {
            playerScore++;
        } else if (roundResults === 'loss') {
            computerScore++;
        };
        console.log('Player', playerScore, '\nComputer', computerScore);

        if (playerScore >= 5) {
            console.log('You are the Champion!');
            playerScore = 0
            computerScore = 0
        } else if (computerScore >= 5) {
            console.log('Mr Computer wins!');
            playerScore = 0
            computerScore = 0
        };
    });

    container.appendChild(newButton);
}