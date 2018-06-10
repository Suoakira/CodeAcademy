// Arrays change

let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle']; // change 4

console.log(bucketList);

// Create an Array test

let newYearsResolutions = ["this", "that", "other"];
console.log(newYearsResolutions);

// Property Access

let newYearsResolutions = ["this", "that", "other"];
console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[3]); // undefined as does not exsist

// Update Elements

newYearsResolutions[1] = "Learn a new language";

// Length Property

console.log(newYearsResolutions.length); // tells me number of elements in the array

// push Method

let newYearsResolutions = ["this", "that", "other"];
console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);

newYearsResolutions[1] = "Learn a new language";

console.log(newYearsResolutions.length);

newYearsResolutions.push("1", "2"); // add to an array
newYearsResolutions.pop();          // remove from an array

console.log(newYearsResolutions);

// More Array Methods

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // remove first item

groceryList.unshift('popcorn'); // add to the start of an array
console.log(groceryList);

console.log(groceryList.slice(1, 4)); // cuts out part of the array
console.log(groceryList);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push("ketchup");
condiments = ["string"];

utensils.pop();

utensils = ["this", "that", "other"]; // throws error as cant change a const
