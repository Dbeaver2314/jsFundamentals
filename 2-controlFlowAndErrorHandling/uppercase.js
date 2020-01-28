/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

// let name = "DAnIel";
// if (name.charAt(0) == name.charAt(0).toUpperCase()) {
//   console.log(name.charAt(0) + name.slice(1).toLowerCase());
// } else {
//   console.log(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase());
// }

let age = 28;

if (age <= 17) {
  console.log("sorry you cant do anything");
} else if (age >= 25) {
  console.log("you can rent a car!");
} else if (age >= 21) {
  console.log("you can drink!");
} else if (age >= 18) {
  console.log("you can vote!");
}
