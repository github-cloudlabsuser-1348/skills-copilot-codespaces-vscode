class Calculator {
    constructor() {
        this.clearDisplay();
    }
    //let display = document.getElementById('display');
        currentOperation = null;
        firstOperand = null;

        appendNumber(number) {
            display.value += number;
        }

        setOperation(operation) {
            if (display.value === '') return;
            firstOperand = parseFloat(display.value);
            currentOperation = operation;
            display.value = '';
        }

        calculateResult() {
            if (currentOperation === null || display.value === '') return;
            let secondOperand = parseFloat(display.value);
            let result;
            switch (currentOperation) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
                default:
                    return;
            }
            display.value = result;
            currentOperation = null;
            firstOperand = null;
        }

        clearDisplay() {
            display.value = '';
            currentOperation = null;
            firstOperand = null;
        }
}