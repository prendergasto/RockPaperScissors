

export function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    // here we are multiplying the computer's choices by the const "randomNumber" in order to siumulate a choice between rock paper n scissors.
    return choices[randomNumber];
}