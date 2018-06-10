// Introduction to Class's

/* 
* Java is an object orientated coding language change 2 test
*/

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

// Constructor

// Constructor constructor method makes it different from object model method


class Surgeon {
	constructor(name, department) {
		this.name = name;
		this.department = department;
	}
}

// Instance use's the class constructor model to create new instances

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular'); // examples of an instance
const surgeonDurant = new Surgeon('Durant', 'Orthopedics'); // secound example of an instance

// Methods

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20; // underscores indicate they should not be eddited directly
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff; // the -= is the same as _remainingVacationDays = _remainingVacationDays - daysOff; its just short hand syntax
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// Method Calls

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3); // calls the method takeVacationDays and pass's the argument of 3 in
console.log(surgeonCurry.remainingVacationDays); // using "." dot notation to call from the class.

// Inheritance 

// shares attributes of the parent

// Inheritance part 2

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() { // getters as cannot be accesedd directly
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    return this._remainingVacationDays -= daysOff; // again function inside the object or class is called a method a -= 1 is short hand for a = a - 1
  }
}

// Inheritance part three

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee { // nurse class extends atributes from HospitalEmployee
  constructor(name, certifications) {
    super(name); // super calls from the HospitalEmployee, copys the this._name = name, so no need to re-emter info
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']); // creates a new instance for the Nurse

// Inheritance part 4

nurseOlynyk.takeVacationDays(5); // the methods are also extended in the same manner
console.log(nurseOlynyk.remainingVacationDays); // this logs the remaining vacation days to the console.

// Inheritance part 5

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification); // using the .push method to create a new method to add certifications
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification("Genetics"); // calling the method from the Class, using the getter

console.log(nurseOlynyk.certifications); // logging to the console.

// Static methods

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword() { // this static method, is used when you only want to to be called directly from the parent class, and not the instances.
    const randNum = Math.floor(Math.random()* 10000);
    return randNum;
  }
}

