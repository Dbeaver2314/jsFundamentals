/**
 -arrays are containers that hold a list of items
 -denoted by[]
 -can hold multiple datatypes
 -each item is seperated by a comma
 */

//  let list=['orange' , 'banana','apple']

//  console.log(list[1])
//  /**
/* when calling an array we append square brackets on the end with the index number in refrence.
 */

let students = [
  "matt",
  "bob",
  "jeff",
  "AB",
  23,
  true,
  ["kris", "taylor", "will"]
];

console.log(students instanceof Array);

console.log(students[2]);

console.log("hi", students[6][2]);
