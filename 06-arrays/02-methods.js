let food = ["pecan pie", "shrimp", "quesadilla", "cheesecake", "hotdog"];

food.push("Pizza"); //appends item to array

console.log(food);

food.splice(1, 1, "Bananas"); // position, how many to remove, what to add

food.splice(2, 0, "sweet Potato Pie");
console.log(food);

food.pop();
console.log(food);

food.shift();
console.log(food);

food.unshift("popcorn", "steak");
console.log(food);

console.log("original array", food);
