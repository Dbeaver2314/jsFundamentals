/*
a ternary is a short hand for writing an if/else statement.
-requires the defualt or catch all(else)
*/

let num = 6;
//ternary
num > 0 ? console.log("yes") : console.log("no");

//If
if (num > 0) {
  console.log("yes");
}

let nums = -6;
//ternary
nums == 0
  ? console.log("working")
  : nums < 0
  ? console.log("not working")
  : console.log("still not working");

//if
if (nums == 0) {
  console.log("working");
} else if (nums < 0) {
  console.log("not working");
} else {
  console.log("still not working");
}

//
//
//
//

let age = 1;
age >= 25
  ? console.log("you can rent a car!")
  : age >= 21
  ? console.log("you can drink!")
  : age >= 18
  ? console.log("yay you can vote!")
  : console.log("sorry you're to young to do anything fun");
