/*
    -javascript is intererpeted line by line, top to bottom, and performs 2 passes of the code.
        -the first pass of the code recognizes where we have declared variables and stores them away in memory.
        - looks at anything on the left side of our assignment operator(=)
    - the second pass of the code is where values we have given our variables are actually assigned.


-NOTE: functions are also hoisted.
*/

console.log(name);
let name = "Daniel";

b();

function b() {
  console.log("I have been hoisted");
}
