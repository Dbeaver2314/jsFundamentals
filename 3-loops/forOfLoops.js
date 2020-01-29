/*
    - ForOf loops look at the iterable properties of an array
    - cant use forof loops on objects because objects are enumerable not iterable

*/

let dogArray = ["great dane", "huskies", "dalmations", "pug"];

for (let dog of dogArray) {
  console.log(dog, "goes Bark");
}
