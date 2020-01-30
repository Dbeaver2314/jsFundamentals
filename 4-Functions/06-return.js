// let name = () => {
//   return "Daniel";
// };

// let myNameIs = name();
// console.lo g(myNameIs);

function tip(percent, total) {
  return total * percent;
}
let tipAmmt = tip(0.25, 50).toFixed(2);
console.log(tipAmmt);

let tip = total => total * 0.2;
let tipAmt=tip(100);
console.log(tipAmt)

function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 
