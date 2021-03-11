// alert("hi");

const btnBackToOutput = document.querySelector(".back-to-output");
const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const output = document.querySelector(".output");
const outputOutput = document.querySelector(".output-output");

btnBackToOutput.addEventListener("click", function () {
  let inputValue = inputText.value;
  let outputValue = outputText.value;
  console.log("hi");
  output.innerHTML = inputValue;
  outputOutput.innerHTML = outputValue;
});

// btnBackToOutput.addEventListener("click", function () {
//   let inputTextValue = inputText.value;
//   console.log(inputTextValue);

//   output.innerHTML = inputTextValue;
// });
