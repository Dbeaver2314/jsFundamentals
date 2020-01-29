function hi() {
  console.log("hello");
}

//as soon as our parser sees a function invocation it happens immediately

function count(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
count(10);

let arry = ["this", "is", "Really", "cool"];

function words() {
  for (let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
  }
}
words();
