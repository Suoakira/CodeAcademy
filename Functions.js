// Introduction to functions

let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

// Functions
const takeOrder = () => {
	console.log("Order pizza");
}

takeOrder();

// Parameters

const takeOrder = (topping) => {
  console.log('Order: pizza' + topping);
};

takeOrder("cheese");

// Parameters II


let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
}

const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
}



console.log(getSubTotal(orderCount));
console.log(getTotal(orderCount));

// Function Declarations

function isGreaterThan(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}
  
isGreaterThan(2, 4);

// Function Expressions


const isGreaterThan = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)

// Arrow Functions

const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

/* 
*The return word can be,
removed in this form of 
shorthand syntax
*/










































