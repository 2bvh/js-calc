const calculator = document.querySelector('#calculator');
const keys = calculator.querySelector('#button-container');
const display = document.querySelector('#display');
const previousKeyType = calculator.dataset.previousKeyType;


const calculate = (n1, operator, n2) => {
    let result = '';

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
}


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKey = 'number';
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
                display.textContent = '0';
            }

            calculator.dataset.previousKey = 'decimal';
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'divide' ||
            action === 'multiply'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayNum;

            if (firstValue && operator) {
                display.textContent = calculate(firstValue, operator, secondValue);
            }
        }

        key.classList.add('is-depressed') {
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if (action === 'clear') {
            calculator.dataset.previousKeyType = 'clear';
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            calculator.dataset.previousKeyType = 'calculate';
            display.textContent = calculate(firstValue, operator, secondValue);
        }

        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.';
        }

        if (
            firstValue &&
            operator &&
            previousKeyType !== 'operator'
        ) {
            display.textContent = calculate(firstValue, operator, secondValue);
        }
    }
})