// Javascript exercise's


const s = [5, 7, 2];
function editInPlace() {
  "use strict";

s[0] = 2;
s[1] = 5;
s[2] = 7;

}
editInPlace();

// write higher order arrow functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  let squaredIntegers = realNumberArray.filter((integer) => integer % 1 === 0 )
  
  squaredIntegers = squaredIntegers.map((square) => square * square )
  // change code above this line
  
  
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// set default parmeters for your code

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN