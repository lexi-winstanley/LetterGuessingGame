# Letter Guessing Game
[View Live](https://lexi-winstanley.github.io/letterGuessingGame/)

## Motivation 
To create a simple game using JavaScript in which the goal is for the player to press keys to correctly guess which letter has been randomly selected by the application. 

## Summary
A JavaScript game in which a player has 9 chances to guess which letter has been randomly selected by the application. Once the player is successful or runs out of guesses the game restarts.

## Details
The application uses Math.random() to choose a value between 97 and 122 corresponding to the Ascii codes for the lowercase alphabet. The corresponding letter is stored in a variable as a string so that player guesses can be compared against it. The player has up to 9 tries to guess the correct letter. Each time the player presses a key the event is captured. The application then checks to see if the key pressed was a lowercase letter and makes sure the player has not already guessed it by comparing it to an array of previous guesses. If these conditions are met the value is compared against the stored target letter. If the values match the player wins, the number of wins displayed will increment and the game will restart. If the user's guess is incorrect but they have remaining guesses, the value is added to the array of previous guesses. Each time a letter is added to the previous guesses array, the number of remaining guesses decrements. If the player has no remaining guesses, the game is over. The number of losses displayed will increment and the game will restart. When the game restarts the application chooses a new letter, the number of guesses remaining resets to 9 and the incorrect guesses are cleared.   

## Role
Sole developer responsible for design, code and creation of custom graphics. Functionality requirements provided by UW Coding Bootcamp/Trilogy Education Services.

## Technologies
HTML
<br/>CSS
<br/>JavaScript
<br/>jQuery
