const display = document.getElementById("result");
const calculationDisplay = document.getElementById("calculation");
let currentValue = "0";
let previousValue = "";
let operation = null;
let resetScreen = false;
let calculationExpression = "";

function updateDisplay() {
  display.value = currentValue;
  calculationDisplay.textContent = calculationExpression;
}

function appendNumber(number) {
  if (currentValue === "0" || resetScreen) {
    currentValue = "";
    resetScreen = false;
  }

  if (number === "." && currentValue.includes(".")) return;

  currentValue += number;
  updateDisplay();
}

function appendOperation(op) {
  if (operation !== null) calculate();

  calculationExpression = currentValue + " " + op;
  previousValue = currentValue;
  operation = op;
  resetScreen = true;
  updateDisplay();
}

function clearAll() {
  currentValue = "0";
  previousValue = "";
  operation = null;
  calculationExpression = "";
  updateDisplay();
}

function backspace() {
  if (currentValue.length === 1) {
    currentValue = "0";
  } else {
    currentValue = currentValue.slice(0, -1);
  }
  updateDisplay();
}

function calculate() {
  if (operation === null) return;

  let computation;
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(current)) return;

  calculationExpression =
    previousValue + " " + operation + " " + currentValue + " =";

  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "%":
      computation = prev % current;
      break;
    default:
      return;
  }

  currentValue = computation.toString();
  operation = null;
  previousValue = "";
  updateDisplay();
}

function toggleTheme() {
  const calculator = document.querySelector(".calculator");
  const themeText = document.querySelector(".theme-text");

  calculator.classList.toggle("light");

  if (calculator.classList.contains("light")) {
    themeText.textContent = "Sun Theme";
  } else {
    themeText.textContent = "Fire Theme";
  }
}

// Initialize with default 0
updateDisplay();
