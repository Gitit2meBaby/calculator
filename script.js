// NUMBER BUTTON INPUTS
const numberBtns = document.querySelectorAll('.number-btn');
const display = document.querySelector("#display");
let isStoredNumber = false;
let storedNumber = '';

numberBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        lastCalculation = ''
        if (isLastCalculation) {
            display.value = '';
            storedNumber = '';
            isLastCalculation = false;
        }
        const buttonText = button.textContent;
        display.value += buttonText.trim();
    });
});

// DELETE BUTTON
const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener('click', () => {
    let currentText = display.value;

    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        display.value = currentText;
    }
});

// MATH BUTTONS
const mathBtns = document.querySelectorAll('.math-btn');

mathBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        const mathInput = button.textContent;

        if (isLastCalculation) {
            isLastCalculation = false;
        }

        if (lastCalculation) {
            storedNumber = lastCalculation + mathInput.replace(/x/g, '*');
        } else {
            if (!isStoredNumber) {
                storedNumber = display.value + mathInput.replace(/x/g, '*');
                isStoredNumber = true;
            } else {
                storedNumber = storedNumber + display.value + mathInput.replace(/x/g, '*');
            }
        }

        display.value = '';
        console.log(storedNumber);
    });
});

// EQUALS BUTTON
const btnEquals = document.querySelector("#btnEquals");
let calculatedNumber;
let lastCalculation = '';
let isLastCalculation = false;

btnEquals.addEventListener('click', () => {
    let calculation = storedNumber + display.value;
    calculatedNumber = eval(calculation);
    display.value = calculatedNumber.toLocaleString();
    storedNumber = calculation;
    isLastCalculation = true;
    lastCalculation = calculation
});

// RESET BUTTON
const btnReset = document.querySelector("#btnReset");

btnReset.addEventListener('click', () => {
    display.value = '';
    storedNumber = '';
    isLastCalculation = false;
    lastCalculation = ''
});

// THEME SWITCHER
const body = document.querySelector('.body');
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        thumbs.forEach((thumb, i) => {
            thumb.style.opacity = i === index ? '1' : '0';
            body.classList.toggle(`theme${i + 1}`, i === index);
        });
    });
});
