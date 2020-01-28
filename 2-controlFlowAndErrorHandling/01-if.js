/*
Falsy value is a value that is considered false when encountered in a boolean context
only 6 falsey values exist

1. False
2. 0
3. empty string "" ,``
4.null
5. undefined
6. NaN (not a Number)
*/

let isOn = true;

if (isOn == true) {
  console.log("The Light is on!");
}

if (isOn) {
  console.log("The Light Is Still On!");
}

isOn = false;

if (!isOn) {
  console.log("the Light is Off");
}

let weather = 60;

if (weather < 50) {
  console.log("wear a jacket");
}
