let displayValue="";
let firstOperand=null;
let secondOperand=null;
let currentOperation=null;

function updateDisplay(){
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendNumber(number){
displayValue += number;
updateDisplay();
}

function setOperation(operation){
if(currentOperation!==null) calculateResult();
firstOperand=parseFloat(displayValue);
currentOperation=operation;
displayValue="";

}

function calculateResult(){
    if(currentOperation===null||displayValue===" ")return;
    secondOperand=parseFloat(displayValue);
    switch(currentOperation){
        case "+":
        displayValue =firstOperand+secondOperand;
          break;
        case "-":
        displayValue =firstOperand-secondOperand;
            break;
        case "*":
        displayValue =firstOperand*secondOperand;
        break;
        case "/":
        displayValue =firstOperand/secondOperand;
        break;
          
    }
    currentOperation=null;
    firstOperand=null;
    secondOperand=null;
    updateDisplay();
}

function clearDisplay(){
    displayValue="";
    currentOperation=null;
    firstOperand=null;
    secondOperand=null;
    updateDisplay();
}