const numberButtons = document.querySelectorAll(".button.number");
const operationButtons = document.querySelectorAll(".button.operator");
const equalsButton = document.querySelector(".button.equals");
const deleteButton = document.querySelector(".button#delete");
const clearButton = document.querySelector(".button#clear");
const clearEntryButton = document.querySelector(".button#clear-entry");
const previousOperandTextElement = document.querySelector(".secondary-screen");
const currentOperandTextElement = document.querySelector(".main-screen");
// console.log(deleteButton);

let currentOperand = "";
let previousOperand = "";
let prevOperand = "";
let operator = undefined;

function clear() {
    currentOperand = "";
    prevOperand = "";
    operator = undefined;
}

function deleteDigit() {
    currentOperand = currentOperand.slice(0, -1);
}

function appendNumber(number) {
    // if (number === "." && currentOperand.includes(".")) return
    currentOperand += number;
}

function chooseOperation(operation) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        compute();
    }
    operator = operation;
    previousOperand = currentOperand;
    currentOperand = "";
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) return
    switch (operator) {
        case "division":
            computation = prev / curr;
            break;
        case "multiplication":
            computation = prev * curr;
            break;
        case "subtraction":
            computation = prev - curr;
            break;
        case "addition":
            computation = prev + curr;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operator = undefined;
    previousOperand = "";
}

function getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
        integerDisplay = "";
    } else {
        integerDisplay = integerDigits.toLocaleString("en", {
            maximumFractionDigits: 0
        })
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay;
    }
}

function updateDisplay() {
    currentOperandTextElement.innerText = getDisplayNumber(currentOperand);
    console.log(operator);
    if (operator != null) {
        previousOperandTextElement.innerText = `${getDisplayNumber(previousOperand)} ${operator}`;
    } else {
        previousOperandTextElement.innerText = "";
    }
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
        updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        chooseOperation(event.target.id);
        updateDisplay();
    })
});

equalsButton.addEventListener("click", (event) => {
    compute();
    updateDisplay();
});

clearButton.addEventListener("click", (event) => {
    clear();
    updateDisplay();
});

deleteButton.addEventListener("click", (event) => {
    deleteDigit();
    updateDisplay();
});


clear();