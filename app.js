let getComputerChoice = () => {
    let randomInt = Math.floor(Math.random() * 3) + 1

    switch (randomInt) {
        case 1:
            result = 'Rock';
            break;
        case 2:
            result = 'Paper';
            break;
        case 3:
            result = 'Scissors';
            break;
    };
    
    console.log(result);
};

getComputerChoice()