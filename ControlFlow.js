//Introduction to Control Flow change 2

let userName = 'Suoarik';
let knowsJavaScript = false;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

let isSoccerFan = true;

if (isSoccerFan = true) {
	console.log("Goal");
}
else {
  console.log("true");
}

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'This';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
  }

 let hungerLevel = 5;
 
 if (hungerLevel > 7) {
	 console.log("time to eat");
 }
 else {
	 console.log("we can eat later");
 }
  
let moonPhase = 'full';
let isFoggyNight = true;

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else if (moonPhase === "full" && isFoggyNight === true) {
  console.log("yes");
} else {
  console.log('Invalid moon phase');
}

//switch statements
let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new': 
    console.log('Back on two feet');
    break;
  default: 
    console.log('Invalid moon phase');
    break;
}

//ternary versions of if else statements

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

/*
Review: Control Flow
Way to go! We just learned a lot of control flow concepts:

if/else statements make binary decisions and execute different code based on conditions.
All conditions are evaluated to be truthy or falsy.
We can add more conditional statements to if/else statements with else if.
switch statements make complicated if/else statements easier to read and achieve the same result.
The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
Comparison operators, including <, >, <=, and >= can compare two variables or values.
After two values are compared, the conditional statement evaluates to true or false.
The logical operator && checks if both sides of a condition are truthy.
The logical operator || checks if either side is truthy.
The logical operator !== checks if the two sides are not equal.
An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
One equals symbol (=) is used to assign a value to a variable.
Three equals symbols (===) are used to check if two variables are equal to each other.
*/





