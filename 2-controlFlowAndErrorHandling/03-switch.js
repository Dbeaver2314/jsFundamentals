/* 
switch Statments execute a block of code accoring to CASES.
Switch statements use "break" or default keyword, optional

    - break keyword breaks out of current condition & switch statement
    -default keyword is the default to run if no cases evaluate to true

*/

// let officeCharacter = "Micheal";

// switch (officeCharacter) {
//   case "Micheal":
//     console.log("My mind is going a mile an hour");
//     break;
//   case "Dwight":
//     console.log("Perfectenschlag");
//     break;
//   case "Jim":
//     console.log("Bears.Beets.Battlestar Galactica");
//     break;
//   default:
//     console.log(`I'm sorry ${officeCharacter}, but do I know you?`);
// }

let dessert = "dessert soup";
switch (dessert) {
  case "pie":
    console.log("Pie Pie, me oh my!");
    break;
  case "cake":
    console.log("Cake is Great!");
    break;
  case "ice cream":
    console.log("I scream for ice cream!");
    break;
  default:
    console.log(`Not on the menu`);
}
