let name = () => {
  return "Daniel";
};

let myNameIs = name();
console.log(myNameIs);

function tip(percent, total) {
  return total * percent;
}
let tipAmmt = tip(0.1, 50);
console.log(tipAmmt);

let tip = total => total * 0.1;
let tipAmmt = tip(100);
console.log(tipAmmt);
