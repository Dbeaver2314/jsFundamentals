/* 
BOOLEANS
    - a boolean has two possible vales of true or flase

*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/* 
        NULL
        -empty value. think of it as an empty container, nothing is in it, but it still exists as a space to fill

*/
let empty = null;
console.log(empty);

/*
UNDEFINED
    - No value has been assigned AND does NOT act as an empty container, unlike NULL
*/
let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/*
  - Null is like a container with nothing in it.
  - Undefined is when a variable has never been set, or hasnt been created yet


*/

/*
    Numbers are literal numbers.
*/
let degrees = 33;
console.log(degrees);

let precice = 999999999999999;
console.log(precice);
let rounded = 9999999999999999;
console.log(rounded);

let decimal = 0.2 + 0.1;
console.log(decimal);

/*
STRINGS
    Text data types wrapped in quotes

*/

let strigOne = "double quotes";
let stringTwo = "Single quotes";
console.log(strigOne, stringTwo);

/*
Numbers vs strings

*/

first = 1050 + 100;
let second = "1050" + "100";
console.log(typeof first);
console.log(typeof second);
// if any data type is a string the result will be a string

/*
objects 
    -Containers for multiple vaules 
    hold key/value pairs
*/

let frodo = {
  race: "hobbit",
  rings: "one",
  cloak: true
};

console.log(frodo);

/*
 ARRAYS
    - arrays are containers that hold a list of item
    let list =[  "item one"  "item two"  "item three"];
    list== variable
    []= denote that this is an array
    items seperated by commas

*/

let burritos = ["large", 4, true];
console.log(burritos);


/*
String Properties
    - strings have properties or qualities that are associated with strings
*/

let myName= "Daniel"
console.log(myName.length)

/*

String methods
    - methods are tools that can help manipulate data
        - method are always called with ()
        .toUpperCase() is a method
*/

let myNameIs= "daniel"
console.log(myNameIs.toUpperCase())


let home = 'Greenwood';
console.log(home.includes("ree"))