function Person(name, age, canVote) {
  this.name = name;
  this.age = age;
  this.canVote = canVote;
}

let person4 = new Person("james", 80, true);
console.log(person4)

/*this. KEYWORD refers back to the fuction that called it.
     the keys of the new object we're creating.
     the arguments we pass through our function will resolve as the vales
     NEW keyword that creates a new instance of our "person" functions with the values we pass in the the fuction that invokes it 
     
 */