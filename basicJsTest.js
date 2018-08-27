/*
* These are exercise's i am doing from the eloquent javascript book
*/


// looping a triangle

let hash = "";

function spam() {
  for (var i = 0; i < 8; i++) {
    hash = hash + "#";
    console.log(hash);
  }
 }

spam();

//

// better answer =

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// Fizzbuzz

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// chessbored

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// To get a minimum between two numbers

function calcul(a, b) {
  if (a < b) {
    console.log(a);
  } else {
    console.log(b);
  } return;
}
  
calcul(1, 10)

// recursion statements
 function isEven(num) {
 	if (num % 2 == 0) {
 		console.log("Yes im Even");
 	} else {
 		console.log("Once you eliminate the impossible, whatever remains,no matter how improbable, must be the truth, Yes it must be Odd.")

 	}
 }


// basic boo leans 

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function isCapitalB(str) {
	for (let count = 0; count < str.length; count++) {
		if (str[i] === "B") {
			console.log("I Found it!")
		}
	

	}
}

// counting beans

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


// return function 

var x = myFunction(4, 3);    // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;            // Function returns the product of a and b
}

// converter 

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;

//formatted date


  function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);

    // print messege to status bar


   window.status = "<TYPE YOUR MESSAGE>"; 

   // continuation of the the eloquent theory of javascript

   const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
 