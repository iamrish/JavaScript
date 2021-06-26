// Instead ofgivingthe datat type, the keyword 'let' is used in JS

let currentResult = 0;
let logEntries = [];

// So, this doesn't give an error here, wow! The constant can thus be iniitialised by a variable.
const defaultResult = currentResult;

// currentResult  = defaultResult + 10

// Dekh neeche integer se start hora hai lekin string concatenate kar dera hai. Nice. Shayd python me nahi hota
let outputString = defaultResult + " + 10";

// This is 'JS Template Literal'
// The template literal print the white spaces and next lines. I mean it is parsed in such a way but id dependent on the styling if they
// will be displayed or not. For eg: `${defaultResult} +            10` will print the string along wiht the white spaces if the styling
// is propperly set in the CSS code. Therefore, should be careful while using ticks.
let outputStringWithTicks = `${defaultResult} + 10`;

function getInput() {
  return userInput.value; // in vendor.js
}

function writeOutputString(operator, prevResult, userInput) {
  const string = `${prevResult} ${operator} ${userInput}`;
  let logEntry = {
    number: userInput,
    operation: operator,
    prevResult: prevResult,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  return string;
}

function claculateResult(operator) {
  const input = getInput();
  const temp = currentResult;
  if (operator === "+") {
    currentResult += parseInt(input);
  } else if (operator === "-") {
    currentResult -= parseInt(input);
  } else if (operator === "*") {
    currentResult *= parseInt(input);
  } else {
    currentResult /= parseInt(input);
  }
  outputResult(currentResult, writeOutputString(operator, temp, input));
}

function add() {

  claculateResult('+');
  // const input = getInput();
  // const temp = currentResult;
  // currentResult = currentResult + parseInt(input); // or we can use '+input'. it converts a dacimal input to float and an integer input to integer.
  // // This function is a function in vendor.js. No imports above, the funtion can be used directly. Prolly thhis is dure to the oredering
  // // of the script tags in the HTML file.
  // outputResult(currentResult, writeOutputString("+", temp, input));
}

function subtract() {
  claculateResult('-');

  // const input = getInput();
  // const temp = currentResult;

  // currentResult = currentResult - parseInt(input); // or we can use '+input'. it converts a dacimal input to float and an integer input to integer.
  // // This function is a function in vendor.js. No imports above, the funtion can be used directly. Prolly thhis is dure to the oredering
  // // of the script tags in the HTML file.
  // outputResult(currentResult, writeOutputString("-", temp, input));
}

function multiply() {
  claculateResult('*');

  // const input = getInput();
  // const temp = currentResult;

  // currentResult = currentResult * parseInt(input); // or we can use '+input'. it converts a dacimal input to float and an integer input to integer.
  // // This function is a function in vendor.js. No imports above, the funtion can be used directly. Prolly thhis is dure to the oredering
  // // of the script tags in the HTML file.
  // outputResult(currentResult, writeOutputString("*", temp, input));
}

function divide() {
  claculateResult('/');

  // const input = getInput();
  // const temp = currentResult;

  // currentResult = currentResult / parseInt(input); // or we can use '+input'. it converts a dacimal input to float and an integer input to integer.
  // // This function is a function in vendor.js. No imports above, the funtion can be used directly. Prolly thhis is dure to the oredering
  // // of the script tags in the HTML file.
  // outputResult(currentResult, writeOutputString("/", temp, input));
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
