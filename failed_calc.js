let lastTypedNumber = ""; // (string) The string of typed digits
let mainScreenNb = 0; // (number) The value displayed on main screen
let secondaryScreenNb = ""; // (string) The value displayed on main screen
let result = undefined; // (number) The value calculated after pressing equal button
let operation = undefined; // (string) Type of operation to perform, computed after pressing one of the 4 operation buttons
let firstOperand = undefined; // (number) The value stored for the first operand
let secondOperand = undefined; // (number) The value stored for the first operand
let equalsBtn = false;
let operatorBtn = false;


document.querySelectorAll(".button.number").forEach(number => {
    number.addEventListener("click", function (event) {
        lastTypedNumber += event.target.textContent;
        displayMainScreen(lastTypedNumber);

        console.log(
            "NUMBER: " +
            "lastTypedNumber = " + lastTypedNumber + "; " +
            "mainScreenNb = " + mainScreenNb + "; " +
            "secondaryScreenNb = " + secondaryScreenNb + "; " +
            "result = " + result + "; " +
            "operation = " + operation + "; " +
            "firstOperand = " + firstOperand + "; " +
            "secondOperand = " + secondOperand + "; "
        );
    });
});

document.querySelector(".button.operator.addition").addEventListener("click", () => {
    operation = "+";    
    lastTypedNumber = "";    
    operatorBtn = true;
    equalsBtn = false;
    getResult();
    
    console.log(
        "OPERATOR + : " +
        "lastTypedNumber = " + lastTypedNumber + "; " +
        "mainScreenNb = " + mainScreenNb + "; " +
        "secondaryScreenNb = " + secondaryScreenNb + "; " +
        "result = " + result + "; " +
        "operation = " + operation + "; " +
        "firstOperand = " + firstOperand + "; " +
        "secondOperand = " + secondOperand + "; "
    );
});

document.querySelector(".button.equals").addEventListener("click", () => {
    equalsBtn = true;
    operatorBtn = true;
    getResult();

    console.log(
        "EQUALS 1: " +
        "lastTypedNumber = " + lastTypedNumber + "; " +
        "mainScreenNb = " + mainScreenNb + "; " +
        "secondaryScreenNb = " + secondaryScreenNb + "; " +
        "result = " + result + "; " +
        "operation = " + operation + "; " +
        "firstOperand = " + firstOperand + "; " +
        "secondOperand = " + secondOperand + "; "
    );

});



// Display typed number or result on main screen
function displayMainScreen(num) {
    typeof num === "number" ? mainScreenNb = num : mainScreenNb = parseFloat(num);

    document.querySelector(".main-screen").textContent = mainScreenNb;
}

function doOperation(a, b, operation) {
    if (operation === "/") { return a / b };
    if (operation === "*") { return a * b };
    if (operation === "-") { return a - b };
    if (operation === "+") { return a + b };
}

function getFirstOperand() {
    if (firstOperand === undefined && operation !== undefined && result === undefined) {
        firstOperand = mainScreenNb;
    } else if (result !== undefined) {
        firstOperand = result;
    }

}

function getSecondOperand() {
    if (firstOperand !== undefined && equalsBtn) {
        secondOperand = parseFloat(lastTypedNumber);
    }

    if (firstOperand !== undefined && operatorBtn) {
        secondOperand = parseFloat(mainScreenNb);
    }
}

function getResult() {
    getFirstOperand();
    getSecondOperand();
    if (firstOperand && secondOperand && operation) {
        result = doOperation(firstOperand, secondOperand, operation);
        displayMainScreen(result);
    }
    
}


displayMainScreen(0);