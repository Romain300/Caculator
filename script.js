function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "ERROR";
    } else {
        return a + b;
    };  
};

function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "ERROR";
    } else {
        return a - b;
    }  ;
};

function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "ERROR";
    } else {
        return a * b;
    }
    
};

console.log(multiply(5, 6));

function divide(a,b) {
    if (isNaN(a) || isNaN(b)) {
        return "ERROR";
    } else if (b === 0) {
        return "lol";
    } else {
        return Math.round((a / b) * 100000) / 100000;
    }
};


let number1 = undefined;
let number2 = undefined;
let number3 = undefined; // use to fix a bug
let operator = undefined;
let result = undefined;


function operate(number1, operator, number2) {
    if (operator === "/") {
        return divide(number1, number2);
    } else if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        return subtract(number1, number2);
    } else if (operator === "x") {
        return multiply(number1, number2);
    }
};

const numbersButton = document.querySelectorAll(".numberButton");
const screen = document.querySelector(".screen");
const operatorsButton = document.querySelectorAll(".operatorButton");
const operateButton = document.querySelector(".operateButton");
const clearButton = document.querySelector(".cancel");

let currentDisplayValue = "";

function populateScreen() {

    numbersButton.forEach((button) => {
        button.addEventListener("click", () => {
            if (currentDisplayValue.length < 15) {
                const number = button.textContent;
                currentDisplayValue += number;
                screen.textContent = currentDisplayValue;
            };
            
        });
    });

    //return result without using "=" button, allows to do several calculs in a row.
    operatorsButton.forEach((button) => {
        button.addEventListener("click", () => {

            
            if (number1 === undefined) {
                operator = button.textContent;
                number1 = parseInt(currentDisplayValue);
                currentDisplayValue = "";
            } else if (number1 !== undefined && currentDisplayValue !== "") {
                number2 = parseInt(currentDisplayValue);
                currentDisplayValue = "";
                result = operate(number1, operator, number2);
                number1 = result;
                screen.textContent = result;
                operator = button.textContent;
            }  else if (number1 !== undefined && currentDisplayValue == "") {
                operator = button.textContent;
            }
        });
    });


    //Return result with the "=" button

        operateButton.addEventListener("click", () => {

            if(number1 !== undefined) {
                number2 = parseInt(currentDisplayValue);
                result = operate(number1, operator, number2);
                screen.textContent = result;
                number1 = result;
                console.log(result.toString().length);
                currentDisplayValue = "";
            }; 

         });

}



function clear() {
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    result = undefined;
    currentDisplayValue = "";
    screen.textContent = 0;   
};

clearButton.addEventListener("click", () => {
    clear();
})

populateScreen();


