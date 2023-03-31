// let userNumber = prompt('Guess a number between 1-4!')
// let numberConversion = Number(userNumber)
// console.log(numberConversion)
// let userLetter = ''
// let userGuessAgain
// let guessCount = 1

// if (Number.isNaN(numberConversion)) {
//     alert('You must give a real number')
// } else {
//     alert('Got it')
// }
// if (numberConversion == 4) {
//     alert("You're correct!")
// } else alert('Try again!')
// if (numberConversion >=5) {
//  alert ("You've got to guess lower!")
//      userLetter = prompt('Would you like to try again? Y || N')
// } else if (numberConversion <=3) {
//     alert ("You've got to guess higher!")
//      userLetter = prompt('Would you like to try again? Y || N')
// } 
// if (userLetter == 'Y') {
//  userGuessAgain= prompt('Guess a number between 1-4!')
//  guessCount++
// } else {
//     alert('They quit. Number of guesses: '  `$(guessCount)` )
// }
// if (userGuessAgain == 4){
//     alert("You're correct!")
// }  else if (userGuessAgain <= 3) {
//     alert("You're number is too low!")
//     playAgain();
// } else if (userGuessAgain >= 5) {
//     alert("You're number is too high!")
//     playAgain();
// }
// // Need to make a would you like to play again function because i I'm getting tired of if else statements lol
// function playAgain(){
//     let playA = prompt('Would you like to play again Y or N') 
//     if (playA === 'Y') {} 
//     else if (playA === 'N') {}
//     else 
//     {alert('Invaild entry') 
//     return playAgain}
// }
// // Need a guess count function?
// function guesses(){

// }

let guessCount = 1;
let userGuesses = [];
let userName = prompt('What is your name?')

function guessNumber() {
  let userNumber = prompt(`Guess a number between 1-4, ${userName}`);
  let numberConversion = Number(userNumber);
  console.log(numberConversion);

  if (Number.isNaN(numberConversion)) {
    alert('You must give a real number');
    guessNumber();
  } else if (numberConversion === 4) {
    alert(`You're correct ${userName}, Number of guesses: ${guessCount}`);
    alert(`Your previous guesses: ${userGuesses}`)
// Need to figure out how why userGuesses breaks. I forgot about curly braces.
  } else if (numberConversion >= 5) {
    alert("You've got to guess lower!");
    guessCount++;
    userGuesses.push(numberConversion);
    guessNumber();
  } else if (numberConversion <= 3) {
    alert("You've got to guess higher!");
    guessCount++;
    userGuesses.push(numberConversion);
    guessNumber();
  }
}
//need to add a break statement somewhere`
function playAgain() {
  let userLetter = prompt('Would you like to play again? Y or N');

  if (userLetter === 'Y') {
    guessCount = 1;
    guessNumber();
    playAgain();
  } else if (userLetter === 'N') {
    alert(`Thanks for trying! You guessed ${guessCount} time(s).`);
  } else {
    alert('Invalid entry. Please enter Y or N.');
    playAgain();
  }
}

guessNumber();
playAgain();