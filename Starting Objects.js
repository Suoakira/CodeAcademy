// Starting Objects!

let person = {
  name: 'Tyron',
  age: 40
};

Console.log("Suoarik")

// More Objects

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]); // this line calls from the object

// Adding a Property

person.hobbies = ["this", "that"]

console.log(person["hobbies"]); // this is braket notation of calling keys inside objects
console.log(person.hobbies); // this is . (dot) notiation of calling keys inside objects


// edit propertys

person.hobbies = ['Basketball'];
console.log(person.hobbies);

// Methods Functions inside objects (objects have key function pairs they are called methods_

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => { // no need to = in objects use : // one way of syntax
  return "Hello, there!"
}
};

console.log(person.sayHello());

// Methods in ES6

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() { // another way of function syntax
    return 'Hello, there!';
  },
  
  sayGoodbye() { // a third way of writeing function syntax
    return 'Goodbye!';
  }
  
};

// this keyword in objects

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return `Hello, my name is ${this.name}`; // this allows name to be called, without javaScrip with produce a referance error, as they are not in the same scope.
  },
  
  sayGoodbye() {
    return 'Goodbye!';
  }
}

// the this keyword

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  
  sayGoodbye() {
    return 'Goodbye!';
  }
};


let friend = {
  name: 'Lebron'
};

friend.sayHello = person.sayHello; // this even though its in the first person object model, calls the name inside its own friend object

console.log(friend.sayHello());
console.log(person.sayHello());

// Getters and Setters

/*
* UnderScore notiation is used
* to denote, a property or value that should not be
* modified directly by other code
* properties should be set with underscore
* of attributes you wish to access later in the codde
*/

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  }

};

// Getters and Setters part 2

person.age = "Thirty-nine"; // returns Invalid Input as not a number
person.age = 39; // calls the setter and pass's in the age of 39 to the setter method

// Getters and Setters Part 3

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  get age() {
    return `${this._name} is ${this._age} years old`; // added a getter to get the value saved to age variable
  }
};

person.age = "Thirty-nine";
person.age = 39;

console.log(person.age)






  

























