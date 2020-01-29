function hi(name) {
  console.log(`Hello ${name}`);
}
hi("Daniel");

function count(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
count(10);

function fullName(first, last) {
  let full = first + " " + last;
  console.log(`Hello my name is ${full}`);
}
fullName("Daniel", "Beaver");
