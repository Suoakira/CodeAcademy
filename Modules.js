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

