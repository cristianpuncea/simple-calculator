// When I click a number button, get the number associated to it (string type) in a variable ($digit)
let digit = "0";
let mainScreenNb = "";
let secondaryScreenNb = "";
let result;
let operation;
let firstOperand = 0;
let secondOperand = 0;

console.log(mainScreenNb);


// Get the number corresponding to each number button after they are pressed
document.querySelectorAll(".button.number").forEach(number => {
    // console.log(number);
    number.addEventListener("click", function (event) {
        digit = event.target.innerText;
        formNumber(digit);
        displayMainScreen(mainScreenNb);
    });
});


document.querySelector(".button.operator.division").addEventListener("click", () => {
    operation = "division";
    getFirstOperand();
    resetMainScreen();
});

document.querySelector(".button.operator.multiplication").addEventListener("click", () => {
    operation = "multiplication";
    getFirstOperand();
    resetMainScreen();
});

document.querySelector(".button.operator.subtraction").addEventListener("click", () => {
    operation = "subtraction";
    getFirstOperand();
    resetMainScreen();
});

document.querySelector(".button.operator.addition").addEventListener("click", () => {
    operation = "addition";
    getFirstOperand();
    resetMainScreen();
});

document.querySelector(".button.equals").addEventListener("click", () => {
    getSecondOperand();
    getResult();
});

document.querySelector("#clear").addEventListener("click", clear);

document.querySelector("#clear-entry").addEventListener("click", clearEntry);

function displayMainScreen(number) {
    document.querySelector(".main-screen").innerText = parseInt(number);
}

function resetMainScreen() {
    mainScreenNb = "";
}

function displaySecondaryScreen(number) {
    document.querySelector(".secondary-screen").innerText = parseInt(number);
}

function formNumber(digit) {
    mainScreenNb += digit;
}

function getFirstOperand() {
    if (result !== undefined) {
        firstOperand = result;
    } else if (mainScreenNb === "") {
        firstOperand = 0;
    } else {
        firstOperand = parseInt(mainScreenNb);
    }
    console.log("First operand is: " + firstOperand);
}

function getSecondOperand() {
    if (mainScreenNb === "") {
        secondOperand = 0;
    } else {
        secondOperand = parseInt(mainScreenNb);
    }
    console.log("Second operand is: " + secondOperand);
}

function clear() {    
    // console.log("cleared");
    mainScreenNb = "0";
    result = undefined;
    roperation = undefined;
    firstOperand = 0;
    secondOperand = 0;
    displayMainScreen(mainScreenNb);
    displaySecondaryScreen(mainScreenNb);
}

function clearEntry() {    
    // console.log("cleared");
    mainScreenNb = "0";
    displayMainScreen(mainScreenNb);
}

function getResult(btn) {    
    result = doOperation(firstOperand, secondOperand);
    displayMainScreen(result);
    firstOperand = result;
    console.log("getResult " + firstOperand);
}


function doOperation(a, b) {
    if (operation === "division") { return a / b };
    if (operation === "multiplication") { return a * b };
    if (operation === "subtraction") { return a - b };
    if (operation === "addition") { return a + b };
}

// $digit concatenates to $mainScreenNb and display it on main screen



// $result

// When clicking an operator button:
    // - store pressed button info in var $operation, e.g. division, multiplication, subtraction, addition
    // - $mainScreenNb is stored in var $firstOperand
    // - $firstOperand and $operation are displayed on second screen

// $digit concatenates to $mainScreenNb and display it on main screen

// When clicking the equals button:
    // - $mainScreenNb variable is assigned to var $secondOperand
    // - Calling a function named calculation(operation, firstOperand, secondOperand) and storing the result in the var $result
    // $result value is assigned to $mainScreenNb and displayed to main screen
    // In the second screen it is displayed ($firstOperand + $operation + $secondOperand


    // Create functions for every operation e.g. division(), multiplication(), subtraction(), addition()

// 