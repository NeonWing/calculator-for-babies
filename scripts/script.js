let firstNum;
let operator;
let secondNum;

//Buttons Variables
const numbers = document.querySelectorAll(".reg");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        addToDisplay(number.innerHTML);
    });
});

//Screen Variable
const displayText = document.querySelector(".screen");

function operate(first, operator, second) {
       switch(operator) {
           case '+':
               return add(first, second);
            case '-':
                return subtract(first, second);
            case '*':
                return multiply(first, second);
            case '/':
               return divide(first, second);
       }
}

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function addToDisplay(e) {
    if(displayText.innerHTML === "0"){
        displayText.innerHTML = e;
    } else {
        displayText.innerHTML = displayText.innerHTML + e;
    }
}