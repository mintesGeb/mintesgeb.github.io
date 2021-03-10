//   selector
let title = document.querySelector("h1");
let firstValue = document.querySelector(".first-value");
let secondValue = document.querySelector(".second-value");
let btnAdd = document.querySelector(".add");
let btnSub = document.querySelector(".sub");
let btnMultiply = document.querySelector(".multiply");
let output = document.getElementById("output");

//   alert(firstValue);
btnAdd.addEventListener("click", function () {
  let sum = firstValue.value + secondValue.value;
  output.innerHTML = sum;
});

btnSub.addEventListener("click", function () {
  let difference = firstValue.value - secondValue.value;
  output.innerHTML = difference;
});

btnMultiply.addEventListener("click", function () {
  let prod = firstValue.value * secondValue.value;
  output.innerHTML = prod;
});

function addValues(a, b) {
  return a + b;
}
