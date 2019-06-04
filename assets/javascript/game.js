var possibleCharacters = "abcdefghijklmnopqrstuvwxyz";
var computerLetter;
var userGuess;
var wins = 0;
var losses = 0;
var userGuesses = [];
var numberWrong = userGuesses.length;

//references to HTML elements
var winsLabel = document.getElementById('numberWins');
var lossesLabel = document.getElementById('numberLosses');
var guessesLabel = document.getElementById('listUserGuesses');



//generates a random string character from var possibleCharacters
function newRandomLetter() {
    var charactersLength = possibleCharacters.length;
    return possibleCharacters.substr(Math.floor(Math.random() * charactersLength), 1);    
}

//sets computerLetter to result of newRandomLetter()
var computerLetter = newRandomLetter();

//logs computerLetter in console
console.log(computerLetter);

function incrementGuesses() {
    numberWrong++;
}

function printWins() {
    winsLabel.textContent = wins;
}

function printLosses() {
    lossesLabel.textContent = losses;
}

function printGuesses() {
    guessesLabel.textContent = userGuesses;
}

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
    } else if (userGuesses.includes(userGuess) === false && numberWrong < 9 && possibleCharacters.includes(userGuess) === true) { //prints new userGuess to userGuesses array if its not already there and wrong guesses is less than 9
        userGuesses.push(userGuess);
        printGuesses();
        incrementGuesses();
    } else if (numberWrong === 9) { //increments losses if numberWrong is 9, resets numberWrong to 0 after and generates new random number
        losses++;
        printLosses();
        clearGuesses();
        printGuesses();
        numberWrong = 0;
        computerLetter = newRandomLetter();
        console.log(computerLetter);
    }
}

