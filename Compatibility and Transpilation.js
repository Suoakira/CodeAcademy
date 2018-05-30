// Compatibility and Transpilation

// caniuse shows compatibility of diffrent browsers with versions of javascript e.g ES5 ES6 etc
// Babel is a javascript library, which converts ES6 syntax into ES5 syntax

// ES5 vs ES6 Syntax

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;


// Set the variable below to a number
let esFivePercentageSupport = 97.43;

// Set the variable below to a number
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

// Transpilation with Babel

// npm install babel-cli  (installs babel client)
// npm install babel-preset-env  (installs a babel required pakage)
// npm run build (builts the npm turns ES6 syntax to ES5 syntax)

// npm init

// npm stands for node pakage manager
// npm init command creates a package.json in the root directory.
// a package.json contains information about the current javascript project
//                - Metadata � This includes a project title, description, authors, and more.
//                - A list of node packages required for the project � If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
//                - Key-value pairs for command line scripts � You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.



