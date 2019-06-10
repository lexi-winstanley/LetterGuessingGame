var wins = 0;
var losses = 0;
var userGuesses = [];
var computerLetter;

//create variables to replace HTML text 
var winsText = document.getElementById('numberWins');
var lossesText = document.getElementById('numberLosses');
var guessesText= document.getElementById('listUserGuesses');
var numberLeftText = document.getElementById('numberGuessesLeft');

//generates a pseudo random 0 to ~.9999999 * 26, need to add 97 to get to Ascii codes 97-122 for lowercase alphabet
var computerAsciiCode = Math.trunc(Math.random() * 26) + 97;

//converts ascii code to a string and sets as computerLetter
computerLetter = String.fromCharCode(computerAsciiCode);

console.log(computerLetter);

function updateDisplay() {
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesText.textContent = userGuesses.join(', ');
    numberLeftText.textContent = 9 - userGuesses.length;
}

document.onkeyup = function(event) {
    //sets userGuess to the key pressed
    var userGuess = event.key
    //converts userGuess to an ascii char code to be able to check if the key pressed was a lowercase alphabet character
    var userGuessCharCode = userGuess.charCodeAt(0);
    
    //if the user presses a key that they've already pressed or that is not lowercase alphabet do nothing
    if (userGuesses.includes(userGuess) || userGuessCharCode < 97 || userGuessCharCode > 122) {
        return;
    } else {
        //if userGuess is correct, increment wins and start over..
        if (userGuess === computerLetter) {
            wins++;
            userGuesses = [];
            computerAsciiCode = Math.trunc(Math.random() * 26) + 97;
            computerLetter = String.fromCharCode(computerAsciiCode);
            console.log(computerLetter);
        //if userGuess is wrong, add to array and have remaining guesses decrease
        } else if (userGuess !== computerLetter && !userGuesses.includes(userGuess) && userGuesses.length < 8) {
            userGuesses.push(userGuess);
        //if player gets to 9 wrong guesses
        } else {
            losses++;
            userGuesses = [];
            computerAsciiCode = Math.trunc(Math.random() * 26) + 97;
            computerLetter = String.fromCharCode(computerAsciiCode);
            console.log(computerLetter);
        }
        updateDisplay();
    }
}

updateDisplay();
