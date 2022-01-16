// When I click a number button, get the number associated to it (string type) in a variable ($digit)
let mainScreenNb = "0"; // (string) The value displayed on main screen
let secondaryScreenNb = ""; // (string) The value displayed on main screen
let result; // (number) The value calculated after pressing equal button
let operation; // (string) Type of operation to perform, computed after pressing one of the 4 operation buttons
let firstOperand = 0; // (number) The value stored for the first operand
let secondOperand = 0; // (number) The value stored for the first operand

// Get the number corresponding to each number button after they are pressed and display it on main screen
document.querySelectorAll(".button.number").forEach(number => {
    // console.log(number);
    number.addEventListener("click", function (event) {
        mainScreenNb += event.target.innerText;
        displayMainScreen(mainScreenNb);
    });
});


document.querySelector(".button.operator.division").addEventListener("click", () => {
    operation = "division";
    getFirstOperand();
    resetMainScreenNb();
});

document.querySelector(".button.operator.multiplication").addEventListener("click", () => {
    operation = "multiplication";
    getFirstOperand();
    resetMainScreenNb();
});

document.querySelector(".button.operator.subtraction").addEventListener("click", () => {
    operation = "subtraction";
    getFirstOperand();
    resetMainScreenNb();
});

document.querySelector(".button.operator.addition").addEventListener("click", () => {
    operation = "addition";
    getFirstOperand();
    resetMainScreenNb();
});

document.querySelector(".button.equals").addEventListener("click", () => {
    getSecondOperand();
    getResult();
});

document.querySelector("#clear").addEventListener("click", clear);

document.querySelector("#clear-entry").addEventListener("click", clearEntry);

function displayMainScreen(number) {
    document.querySelector(".main-screen").innerText = parseFloat(number);
}

function resetMainScreenNb() {
    mainScreenNb = "0";
}

function displaySecondaryScreen(number) {
    document.querySelector(".secondary-screen").innerText = parseInt(number);
}


function getFirstOperand() {
    if (result !== undefined) {
        firstOperand = result;
    } else {
        firstOperand = parseFloat(mainScreenNb);
    }
    console.log("First operand is: " + firstOperand);
}

function getSecondOperand() {
    if (mainScreenNb === "0") {
        secondOperand = 0;
    } else {
        secondOperand = parseFloat(mainScreenNb);
    }
    console.log("Second operand is: " + secondOperand);
}

function clear() {    
    // console.log("cleared");
    resetMainScreenNb();
    result = undefined;
    operation = undefined;
    firstOperand = 0;
    secondOperand = 0;
    displayMainScreen(mainScreenNb);
    displaySecondaryScreen(mainScreenNb);
}

function clearEntry() {    
    // console.log("cleared");
    resetMainScreenNb();
    displayMainScreen(mainScreenNb);
}

function getResult() {    
    result = doOperation(firstOperand, secondOperand);
    mainScreenNb = result;
    displayMainScreen(mainScreenNb);
    firstOperand = result;
    console.log("getResult firstOperand: " + firstOperand);
    console.log("getResult result: " + result);
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