function calculeTotal(subTotal, tax) {
  return subTotal * tax;
}
const tax = 1.2;
let order1 = 20;
let order2 = 80;
let order3 = 30;

console.log(calculeTotal(order1, tax));
console.log(calculeTotal(order2, tax));
console.log(calculeTotal(order3, tax));
