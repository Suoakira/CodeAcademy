git// Compatibility and Transpilation change

// caniuse shows compatibility of diffrent browsers with versions of javascript e.g ES5 ES6 etc
// Babel is a javascript library, which converts ES6 syntax into ES5 syntax change 3

// ES5 vs ES6 Syntax test 1

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;


// Set the variable below to a number
let esFivePercentageSupport = 97.43;

// Set the variable below to a number2
let esSixTemplateLiterals = 87.68;

/* this shows a 
 * 10% diff in the support for each browser
 * which is significant hence we need babel to convert
 * new Javascript syntax to old
 */

// Why ES6

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

var carbonar = "You can make carbonara with " + pasta + "," + meat + " and a sauce made with " + sauce + ".";

// Transpilation with Babel change 1

// npm install babel-cli  (installs babel client)
// npm install babel-preset-env  (installs a babel required pakage)
// npm run build (builts the npm turns ES6 syntax to ES5 syntax)

// npm init

// npm stands for node pakage manager
// npm init command creates a package.json in the root directory.
// a package.json contains information about the current javascript project
//                - Metadata — This includes a project title, description, authors, and more.
//                - A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
//                - Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.


// Install Node Packages

// npm install - installs node packages locally, which creates a folder called node_modules
// -d appendage dev dependencies allows other devs to install the node packages more easily, they can simply run npm install, it instructs npm to look inside the package json.


// touch .babelrc (creates file that stores the version of JS your using)

// Babel Source Lib


"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
        "build": "babel src -d lib"
}

// added to the package json, this script intialises the transpilation

npm run build // calls the build script in the package json

// this writes the transpilation the the main.js which has the same name as the original file inside the lib folder
// all of the java inside the src file will be transpiled to the lib - main.js


