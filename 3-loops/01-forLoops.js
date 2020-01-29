/*
for loops take in 3 parameters;
1 inital expression
2 condition
3 increment expression



*/
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

for (i = 10; i >= 0; i--) {
  console.log(i);
}
for (i = 0; i >= -24; i -= 2) {
  console.log(i);
}

let str = "daniel";
for (i = 0; i < str.length; i++) {
  console.log(str[i]);
}
let x = 0;
for (i = 1; i <= 50; i++) {
  x = x + i;
  if (i == 50) {
    console.log(x);
  }
}
