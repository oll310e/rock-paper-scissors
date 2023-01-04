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

    console.log(result);
};

let playerChoice = () => {
    let input = prompt('Choose your move!').toLowerCase();

    while (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
        input = prompt('Choose between "rock", "paper" and "scissors"!').toLowerCase();
    };
};

getComputerChoice();

// let playRound = function(playerSelection, computerSelection) {}