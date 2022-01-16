let mainScreenNb = ""; // (string) The value displayed on main screen
let secondaryScreenNb = ""; // (string) The value displayed on main screen
let result = undefined; // (number) The value calculated after pressing equal button
let operation = undefined; // (string) Type of operation to perform, computed after pressing one of the 4 operation buttons
let firstOperand = undefined; // (number) The value stored for the first operand
let secondOperand = undefined; // (number) The value stored for the first operand

console.log(
    "INITIAL: " +
    "mainScreenNb = " + mainScreenNb + "; " +
    "secondaryScreenNb = " + secondaryScreenNb + "; " +
    "result = " + result + "; " +
    "operation = " + operation + "; " +
    "firstOperand = " + firstOperand + "; " +
    "secondOperand = " + secondOperand + "; "
    );

    // SA CREEZ 2 VARABILE: typedNumber pt ce tastez si mainScreenNb pt ce afisez pe main display.

// When operand is clicked:
    // operation = "addition";
    // firstOperand = parseFloat(mainScreenNb);
    // mainScreenNb = "";

// When second number is typed:
    // mainScreenNb = "3";
    // 

// function getResult() {
//    if (operation === undefined) {
//      result = parseFloat(mainScreenNb);
//      return result;
//  }
// 
//    if (mainScreenNb = "") {
//     secondOperand = firstOperand;
//  } else {
//      firstOperand = result;
//  }
//   result = doOperation(firstOperand, secondOperand);
//   return result; 
// }
// 


// STEPS:
// 1: Access page or refresh

    // 1.1 Press EQUALS
            // mainScreenNb = "0";          
            // operation = undefined; 
            // firstOperand = undefined;
            // secondOperand = undefined;
            // result = 0;
                // First screen `${mainScreenNb}`-> "0"
                // Second screen `${result} =`-> "0 ="


    // 1.2: Press OPERATOR
            // mainScreenNb = "2";          
            // operation = "+"; 
            // firstOperand = 2; => firstOperand = parseFloat(mainScreenNb)
            // secondOperand = undefined;
            // result = undefined;
                // First screen `${mainScreenNb}`-> "2"
                // Second screen `${firstOperand} ${operation}`-> "2 +"

        // 1.2.1 Press EQUALS
                    // mainScreenNb = "0";          
                    // operation = "+";                    
                    // secondOperand = 2; => when pressing equals, if (secondOperand === undefined) {secondOperand = parseFloat(mainScreenNb)}
                    // result = 4;
                    // firstOperand = 4; => firstOperand = result;
                        // First screen `${result}`-> "4"
                        // Second screen `${firstOperand} ${operation} ${secondOperand} =`-> "2 + 2 ="

            // 1.2.1.1 Press EQUALS
                        // mainScreenNb = "0";          
                        // operation = "+";                    
                        // secondOperand = 2; => when pressing equals, if (secondOperand === undefined) {secondOperand = parseFloat(mainScreenNb)}
                        // result = 4;
                        // firstOperand = 4; => firstOperand = result;
                            // First screen `${result}`-> "4"
                            // Second screen `${firstOperand} ${operation} ${secondOperand} =`-> "2 + 2 ="

                    
        // 1.2.2 Press DIGITS
                    // First screen `${mainScreenNb}`-> "0"
                    // Second screen `${result} =`-> "0 ="

                    // mainScreenNb = "0";          
                    // operation = undefined; 
                    // firstOperand = undefined;
                    // secondOperand = undefined;
                    // result = 0;

                // 1.2.2.1 Press EQUALS
                        // First screen `${mainScreenNb}`-> "0"
                        // Second screen `${result} =`-> "0 ="

                        // mainScreenNb = "0";          
                        // operation = undefined; 
                        // firstOperand = undefined;
                        // secondOperand = undefined;
                        // result = 0;

        // 2.1: Press equals
        // if (operation === undefined) { result = parseFloat(mainScreenNb) };







// 1: Access page or refresh
// let mainScreenNb = "0"; 
// let secondaryScreenNb = "";
// let result;
// let operation;
// let firstOperand = 0;
// let secondOperand = 0;


// 2: Press number buttons 2 and 5

// 2.1: Press operation btn +

// 2.1.1: Press equals btn =

// 2.2: Press number button 3

// 2.2.1: Press equals btn =

// 2.2.2: Press 



// Get the number corresponding to each number button after they are pressed and display it on main screen
document.querySelectorAll(".button.number").forEach(number => {
    number.addEventListener("click", function (event) {
        mainScreenNb += event.target.innerText;
        displayMainScreen(mainScreenNb);

        console.log(
            "NUMBER: " + event.target.innerText +  "; " +
            "mainScreenNb = " + mainScreenNb + "; " +
            "secondaryScreenNb = " + secondaryScreenNb + "; " +
            "result = " + result + "; " +
            "operation = " + operation + "; " +
            "firstOperand = " + firstOperand + "; " +
            "secondOperand = " + secondOperand + "; "
            );
    });
});

document.querySelector("#delete").addEventListener("click", function deleteDigit() {
    mainScreenNb = mainScreenNb.slice(0, -1);
    if (mainScreenNb.length === 0) { mainScreenNb = "0" };
    displayMainScreen(mainScreenNb);
});

document.querySelector(".button.operator.division").addEventListener("click", () => {
    // operation = "\u00f7"; // division
    // getFirstOperand();
    // mainScreenNb = "0";
    // displaySecondaryScreen(firstOperand, operation, secondOperand);

    // console.log(
    //     "OPERATOR / : " +    
    //     "mainScreenNb = " + mainScreenNb + "; " +
    //     "secondaryScreenNb = " + secondaryScreenNb + "; " +
    //     "result = " + result + "; " +
    //     "operation = " + operation + "; " +
    //     "firstOperand = " + firstOperand + "; " +
    //     "secondOperand = " + secondOperand + "; "
    //     );
});

document.querySelector(".button.operator.multiplication").addEventListener("click", () => {
    operation = "multiplication";
});

document.querySelector(".button.operator.subtraction").addEventListener("click", () => {
    operation = "subtraction";
});

document.querySelector(".button.operator.addition").addEventListener("click", () => {
    operation = "+";
//     getFirstOperand();
//     mainScreenNb = "0";
//     displaySecondaryScreen(firstOperand, operation, secondOperand);

//     console.log(
//         "OPERATOR / : " +    
//         "mainScreenNb = " + mainScreenNb + "; " +
//         "secondaryScreenNb = " + secondaryScreenNb + "; " +
//         "result = " + result + "; " +
//         "operation = " + operation + "; " +
//         "firstOperand = " + firstOperand + "; " +
//         "secondOperand = " + secondOperand + "; "
//         );
});

document.querySelector("#clear").addEventListener("click", clear);

document.querySelector("#clear-entry").addEventListener("click", clearEntry);



document.querySelector(".button.equals").addEventListener("click", () => {
    getResult();


    console.log(
                "EQUALS 1: " +    
                "mainScreenNb = " + mainScreenNb + "; " +
                "secondaryScreenNb = " + secondaryScreenNb + "; " +
                "result = " + result + "; " +
                "operation = " + operation + "; " +
                "firstOperand = " + firstOperand + "; " +
                "secondOperand = " + secondOperand + "; "
                );
    
});
    
//     getSecondOperand();
//     console.log(
//         "EQUALS 1: " +    
//         "mainScreenNb = " + mainScreenNb + "; " +
//         "secondaryScreenNb = " + secondaryScreenNb + "; " +
//         "result = " + result + "; " +
//         "operation = " + operation + "; " +
//         "firstOperand = " + firstOperand + "; " +
//         "secondOperand = " + secondOperand + "; "
//         );

//     getResult();
//     console.log(
//         "EQUALS 2: " +    
//         "mainScreenNb = " + mainScreenNb + "; " +
//         "secondaryScreenNb = " + secondaryScreenNb + "; " +
//         "result = " + result + "; " +
//         "operation = " + operation + "; " +
//         "firstOperand = " + firstOperand + "; " +
//         "secondOperand = " + secondOperand + "; "
//         );
//     getFirstOperand();
//     displayMainScreen(result);
//     console.log(
//         "EQUALS 3: " +    
//         "mainScreenNb = " + mainScreenNb + "; " +
//         "secondaryScreenNb = " + secondaryScreenNb + "; " +
//         "result = " + result + "; " +
//         "operation = " + operation + "; " +
//         "firstOperand = " + firstOperand + "; " +
//         "secondOperand = " + secondOperand + "; "
//         );
//     displaySecondaryScreen(firstOperand, operation, secondOperand);
//     console.log(
//         "EQUALS 4: " +    
//         "mainScreenNb = " + mainScreenNb + "; " +
//         "secondaryScreenNb = " + secondaryScreenNb + "; " +
//         "result = " + result + "; " +
//         "operation = " + operation + "; " +
//         "firstOperand = " + firstOperand + "; " +
//         "secondOperand = " + secondOperand + "; "
//         );

//     console.log(
//         "EQUALS END: " +    
//         "mainScreenNb = " + mainScreenNb + "; " +
//         "secondaryScreenNb = " + secondaryScreenNb + "; " +
//         "result = " + result + "; " +
//         "operation = " + operation + "; " +
//         "firstOperand = " + firstOperand + "; " +
//         "secondOperand = " + secondOperand + "; "
//         );

function displayMainScreen(number) {
    document.querySelector(".main-screen").innerText = parseFloat(number);
}

function displaySecondaryScreen(operand1, operator, operand2) {
    const secondaryScreen = document.querySelector(".secondary-screen");

    if (operand1 === undefined && operator === undefined && operand2 === undefined) { secondaryScreen.innerText = "" };
    if (operand1 !== undefined && operator === undefined && operand2 === undefined) { secondaryScreen.innerText = `${operand1} =` };
    if (operand1 !== undefined && operator !== undefined && operand2 === undefined) { secondaryScreen.innerText = `${operand1} ${operator}` };
    if (operand1 !== undefined && operator !== undefined && operand2 !== undefined) { secondaryScreen.innerText = `${operand1} ${operator} ${operand2} =` };
}

// function resetMainScreenNb() {
//     mainScreenNb = "0";
// }

function clear() {
    mainScreenNb = "0";
    secondaryScreenNb = "";
    result = undefined;
    operation = undefined;
    firstOperand = undefined;
    secondOperand = undefined;
    displayMainScreen(mainScreenNb);
    displaySecondaryScreen();
    console.log(
        "CLEAR: " +
        "mainScreenNb = " + mainScreenNb + "; " +
        "secondaryScreenNb = " + secondaryScreenNb + "; " +
        "result = " + result + "; " +
        "operation = " + operation + "; " +
        "firstOperand = " + firstOperand + "; " +
        "secondOperand = " + secondOperand + "; "        
        );
}

function clearEntry() {
    mainScreenNb = "0";
    displayMainScreen(mainScreenNb);
}

function getFirstOperand() {
    if (firstOperand === undefined) {
        firstOperand = parseFloat(mainScreenNb);
    } else {
        firstOperand = result;
    }

    
}

function getSecondOperand() {
    if (secondOperand === undefined) { secondOperand = parseFloat(mainScreenNb) };
}

// function updateOperands() {
//     getFirstOperand();
//     getSecondOperand();
// }

function getResult() {
    if (operation === undefined) {
        result = parseFloat(mainScreenNb);
    } else {
        result = doOperation(firstOperand, secondOperand);
    }
}

function doOperation(a, b) {
    if (operation === "division") { return a / b };
    if (operation === "multiplication") { return a * b };
    if (operation === "subtraction") { return a - b };
    if (operation === "addition") { return a + b };
}