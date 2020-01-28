/*
-A Variable is a named container for storing data
-we name variable so that we can refer to them later
*/

let a = 2;

let b = 1;
/*
let: javascript keyword   b:Variable Name =: assignment operator 1: Value

*/

console.log(a + b);

/*
Notes on variables:
- A variable must begin with a letter, underscore, or dollar sign.
- Numbers may follow the above variables but they cannot come first.
- JavaScript is CASE sensitive.
- variable names do not allow spaces 
- camelCase is the best pracitice for naming long variable with multiple words

*/

/*
var, let, const

- var: Old keyword for variables in JS
- let: new keyword for variables
- const:  Unchangable variable once declared


*/

/*
Declaration vs initilization:
    - declarations are the LEFT SIDE of a variable or operator (=)
        -let x;

    -Initlization is on the right side of the operator
            Sets the value of a variable
            The value we initilize our variables as is what is on the right side of teh assignment operator
*/
let x;
console.log("Declaration:", x);
x = 100;
console.log("Initialiation,", x);

let y = "hello";

console.log(x, y);

const today = "great";
console.log(today);
today = "wonderful"; //Cannot change the value of a const
