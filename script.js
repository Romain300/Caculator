function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};


function divide(a,b) {
    return Math.round((a / b) * 10) / 10;
};

console.log(add(5,6));
console.log(subtract(5,6));
console.log(multiply(5,6));
console.log(divide(5,6));


let number1;
let number2;
let operator;

function operate(number1, number2, operator) {
    if (operator === "/") {
        return divide(number1, number2);
    } else if (operator === "+") {
        return add(number1, number2);
    } else if (operator === "-") {
        return subtract(number1, number2);
    } else if (operate === "*") {
        return multiply(number1, number2);
    }
};