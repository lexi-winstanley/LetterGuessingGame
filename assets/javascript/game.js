var possibleCharacters = "abcdefghijklmnopqrstuvwxyz";
var computerLetter;
var userGuess;
var wins = 0;
var losses = 0;
var userGuesses = [];
var numberWrong = userGuesses.length;
var numberLeft = 9;

//references to HTML elements
var winsLabel = document.getElementById('numberWins');
var lossesLabel = document.getElementById('numberLosses');
var guessesLabel = document.getElementById('listUserGuesses');
var guessesNumberLabel = document.getElementById('numberGuessesLeft');



//generates a random string character from var possibleCharacters
function newRandomLetter() {
    var charactersLength = possibleCharacters.length;
    return possibleCharacters.substr(Math.floor(Math.random() * charactersLength), 1);    
}

//sets computerLetter to result of newRandomLetter()
var computerLetter = newRandomLetter();

//logs computerLetter in console
console.log(computerLetter);

//increases numberWrong by 1 when incrementGuesses function is called
function incrementGuesses() {
    numberWrong++;
}

function printNumberLeft() {
    guessesNumberLabel.textContent = numberLeft - numberWrong;
}

//prints var wins to HTML when printWins function is called
function printWins() {
    winsLabel.textContent = wins;
}

//prints var wins to HTML when printLosses function is called
function printLosses() {
    lossesLabel.textContent = losses;
}

//prints array userGuesses to HTML when printGuesses function is called
function printGuesses() {
    guessesLabel.textContent = userGuesses;
}

//clears contents of array userGuesses when clearGuesses function is called
function clearGuesses() {
    userGuesses.length = 0;
}

//runs when the user releases a pressed key
document.onkeyup = function(event) {
    //stores which key was pressed 
    var userGuess = event.key;

    if (userGuess === computerLetter) { //compares userGuess to computerLetter and increments wins, clears+prints cleared guess list if true, resets numberWrong to 0 and generates new random number
        wins++;
        printWins();
        clearGuesses();
        printGuesses();
        numberWrong = 0;
        computerLetter = newRandomLetter();
        console.log(computerLetter);
    } else if (userGuesses.includes(userGuess) === false && numberWrong < 8 && possibleCharacters.includes(userGuess) === true) { //prints new userGuess to userGuesses array if its not already there and wrong guesses is less than 9
        userGuesses.push(userGuess);
        printGuesses();
        incrementGuesses();
        printNumberLeft();
    } else if (numberWrong === 8) { //increments losses if numberWrong is 9, resets numberWrong to 0 after and generates new random number
        losses++;
        printLosses();
        clearGuesses();
        printGuesses();
        numberWrong = 0;
        numberLeft = 9;
        printNumberLeft();
        computerLetter = newRandomLetter();
        console.log(computerLetter);
    }
}

