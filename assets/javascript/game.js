

//generates a random string character from var possibleCharacters
function newRandomLetter() {
    var possibleCharacters = "abcdefghijklmnopqrstuvwxyz";
    var charactersLength = possibleCharacters.length;
    return possibleCharacters.substr(Math.floor(Math.random() * charactersLength), 1);    
}

//sets computerLetter to result of newRandomeLetter()
var computerLetter = newRandomLetter();

//logs computerLetter in console
console.log(computerLetter);

var computerLetter;
var userGuess;
var wins = 0;
var losses = 0;
var userGuesses = [];

//runs when the user releases a pressed key
document.onkeyup = function(event) {
    //stores which key was pressed 
    var userGuess = event.key;

    if (userGuess === computerLetter) { //compares userGuess to computerLetter and increments wins, clears+prints cleared guess list if true
        wins++;
        printWins();
        clearGuesses();
        printGuesses();
    } else if (userGuesses.includes(userGuess) === false && numberWrong < 9) { //prints new userGuess to userGuesses array if its not already there and wrong guesses is less than 9
        userGuesses.push(userGuess);
        printGuesses();
        incrementGuesses();
    } else if (numberWrong === 9) {
        losses++;
        printLosses();
        clearGuesses();
        printGuesses();
    }
}


var numberWrong = userGuesses.length;

function incrementGuesses() {
    numberWrong++;
}

var winsLabel = document.getElementById('numberWins');

function printWins() {
    winsLabel.textContent = wins;
}

var lossesLabel = document.getElementById('numberLosses');

function printLosses() {
    lossesLabel.textContent = losses;
}

var guessesLabel = document.getElementById('listUserGuesses');

function printGuesses() {
    guessesLabel.textContent = userGuesses;
}

function clearGuesses() {
    userGuesses.length = 0;
}
