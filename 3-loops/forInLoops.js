/*

    -great for counting key value pairs in an object. Properties in an object are what are called enumerable
    - for in loops will iterate over an objects enumerable properties

*/

let student = {
  name: "Daniel",
  awesome: true,
  degree: "Javascript",
  week: 1
};

console.log(student.degree); // Dot notation
for (let item in student) {
  // console.log(item)
  console.log(student[item]); //object bracket notation
}

let dogArray = ["great dane", "huskies", "dalmations", "pug"];

for (dog in dogArray) {
  console.log(dog);
}

let name = "dANiel";
let capName;

for (i in name) {
  if (i == 0) {
    capName = name[i].toUpperCase();
  } else {
    capName += name[i].toLowerCase();
  }
}
console.log(capName);
