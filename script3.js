// alert("hi");

const btnBackToOutput = document.querySelector(".back-to-output");
const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const output = document.querySelector(".output");

btnBackToOutput.addEventListener("click", function () {
  let inputValue = inputText.value;
  output.innerHTML = inputValue;
});

// btnBackToOutput.addEventListener("click", function () {
//   let inputTextValue = inputText.value;
//   console.log(inputTextValue);

//   output.innerHTML = inputTextValue;
// });
