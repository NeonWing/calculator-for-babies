let firstNum = 0;
let operator = '';
let secondNum = 0;

//Buttons Variables
const numbers = document.querySelectorAll(".reg");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        addToDisplay(number.innerHTML);
    });
});

const operatorBtns = document.querySelectorAll(".reg-op");
operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.id === "equal") {
            secondNum = Number(displayText.innerHTML);
            updateDisplay(operate(firstNum, operator, secondNum));
        } else {
            if(prevText.innerHTML !== '') {
                secondNum = Number(displayText.innerHTML);
                initiateChain(operate(firstNum, operator, secondNum));
                operator = btn.id;
            } else {
                firstNum = Number(displayText.innerHTML);
                operator = btn.id;
                prevText.innerHTML = firstNum;
                displayText.innerHTML = "0";
            }
        }
    }); 
});

//Screen Variable
const displayText = document.querySelector(".currentText");
const prevText = document.querySelector(".previousText");

//Clear and Delete
const clearBtn = document.getElementById("clear").addEventListener('click', () => {
    displayText.innerHTML = 0;
    prevText.innerHTML = "";
    operator = "";
    firstNum = 0;
    secondNum = 0;
});

const deleteBtn = document.getElementById("delete").addEventListener('click', () => {
    let result = displayText.innerHTML.slice(0, -1);
    console.log(result);
    displayText.innerHTML = result;
});

function operate(first, operator, second) {
       switch(operator) {
           case 'plus':
               return add(first, second);
            case 'subtract':
                return subtract(first, second);
            case 'multiply':
                return multiply(first, second);
            case 'divide':
                if(first == 0 || second == 0) {
                    alert("Fuck You") 
                    return 0;
                }
                else return divide(first, second);
       }
}

function updateDisplay(answer){
    displayText.innerHTML = answer;
    prevText.innerHTML = "";
    secondNum = 0;
    operator = "";
    firstNum = 0;
}

function initiateChain(answer) {
    displayText.innerHTML = 0;
    prevText.innerHTML = answer;
    secondNum = 0;
    firstNum = answer;
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

function addToDisplay(num) {
    if(displayText.innerHTML === "0"){
        displayText.innerHTML = num;
    } else {
        if(num === "." && displayText.innerHTML.includes(".")) return
        else displayText.innerHTML = displayText.innerHTML + num;
    }
}