// Hello Modules
// reusable pieces of vode that can be exported from one program and imported for use by another
// find an fix code more easily
// re-use and re-cycle defined logic in the application.
// keep information privite and protected from other modules.
// prevent pollution in global namespace and potential naming collisions, by cautiously selecting variables amd behaviour we load into a program.

// module.exports

let Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;

// created an empty object, assigned a property to the object. Exported as a module with module.exports

// require()

// use require() function to important a module to control the menus data and behaviour. Use another file to handle the import
// invoke calls a function

const Airplane = require('./1-airplane.js'); // use single quotations. Allows module to be used in this

function displayAirplane() {
    console.log(Airplane.myAirplane);
};

displayAirplane(); // calls function

// module.exports part 2

// warp data and functions in an object an export using module.exports


const Airplane = {};

module.exports = { // this can be called as we defined the object above
    myAirplane: "CloudJet",
    displayAirplane: function () {
        return this.myAirplane;
    }
};

// in other log we put

const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane()); // calls from the first object

// export default

// export default ES6 syntax

let Airplane = {};

export default Airplane;

Airplane.availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500
    }
]; // dont need toi define as it is a key in the object model


// import

import Airplane from './airplane';

function displayFuelCapacity() {
    Airplane.availableAirplanes.forEach(function (element) { // first time seeing this sort of syntax
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
}

displayFuelCapacity();

// Named Exports

let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
},
{
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
}];

let flightRequirements = {
    requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements };

    // Named Imports

import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
}

displayFuelCapacity();

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
}

displayStaffStatus();

// Export Named Exports

export let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
    }
];

export let flightRequirements = { // exports soon as it has run so can be used straight away rather than at the bottom where you would have to wait for  the whole script to play out!
    requiredStaff: 4,
    requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
    } else {
        return false;
    }
};
