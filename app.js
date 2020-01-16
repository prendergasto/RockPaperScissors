// define all the variables and add 'div' or 'span' for clarity
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const drawScore_span = document.getElementById('draw-score');
const result_div = document.querySelector('.result > h1');
const scoreBoard_div = document.querySelector('score-board');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


// the computer has three choices (placed in an array) between rock, paper, and scissors.
// in order for the computer to make a 'random' choice we assign a random # between 0, 1, and 2 using math.random * 3 and then rounding down to the nearest whole number
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
// here we are multiplying the computer's choices by the const "randomNumber" in order to siumulate a choice between rock paper n scissors.
    return choices[randomNumber];
}

// this function runs when the user makes a choice between rock paper and scissors... once the user chooses something the computer then makes a random choice of its own
function game(userChoice) {
    const computerChoice = getComputerChoice();
    // console.log("user choice + " + userChoice);
    // console.log("computer choice " + computerChoice);


// these functions serve the "switch" statement ... depending on the outcome of the game, one of theser functions will be called in order to print a statement about win loss or draw
    function win(userChoice, computerChoice) {
        userScore ++;
        userScore_span.textContent = userScore;
        computerScore_span.textContent = computerScore;
        result_div.textContent = ('You win !');
    }

    function loss() {
        computerScore ++;
        computerScore_span.textContent = computerScore;
        userScore_span.textContent = userScore;
        result_div.textContent = ('You lose.......');
        
        
        // result_div.textContent = 'you lose!';
        // userScore --;
        // userScore_span.textContent = userScore;
    }

    function draw () {
        drawScore ++;
        drawScore_span.textContent = drawScore;
        result_div.textContent = ('What\'d the pencil say to the cowboy? ... Draw');

        // userScore /-;
        // computerScore +-;
    }

// rather than using if statements a switch statement allows me to have three cases... wins, losses, and draws. I put all nine outcomes in three different categories depening on win loss draw
    switch (userChoice + computerChoice)
    {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            loss(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

// click functions ... rock, paper, scissors w/ event listeners
function main() {
// added event listeners to rock, paper, and scissors images in order to allow the user's to put in their input
    rock_div.addEventListener('click', function() {
        game('r');

    });
    paper_div.addEventListener('click', function() {
        game('p');

    });
    scissors_div.addEventListener('click', function() {
        game('s');

    });
}

main();





















// }

// switch(game) {
//     case (userChoice == r && getComputerChoice == s): case (userChoice == p && getComputerChoice == r): case (userChoice == s && getComputerChoice == p): 
    
//         ans = ('you win!');
    
//         break;
//     case (userChoice == r && getComputerChoice == p): case (userChoice == p && getComputerChoice == s): case (userChoice == s && getComputerChoice == r):
        
//         ans = ('you lose!');
        
//         break;

//     case (userChoice == r && getComputerChoice == r): case (userChoice == p && getComputerChoice == p): case (userChoice == s && getComputerChoice == s):

//         ans = ('it\'s a draw!');

//         break;
//         console.log(ans);    
// }


// if (userChoice === 'r' && computerChoice === 's')
//     userScore_span.textContent = 'you win!';
//     userScore ++;
    



// const userLabel_div = document.getElementById('user-label');
// const computerLabel_div = document.getElementById('computer-label');
