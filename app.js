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
            if(computerSelection === 'paper') {
                return 'win';
            } else if (computerSelection === 'scissors') {
                return 'loss';
            };
            break;
        default:
            alert('something went wrong')
            return 'draw';
    };
}

const container = document.querySelector('#container');

for (let i = 0; i < 3; i++) {
    let newButton = document.createElement('button');
    newButton.style = 'background-color: blue;width:200px; height:70px; color:white; font-size: 20px;';
    newButton.innerText = `Button${i+1}`;
    container.appendChild(newButton);
}