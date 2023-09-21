const thumb1 = document.querySelector("#thumb1");
const thumb2 = document.querySelector("#thumb2");
const thumb3 = document.querySelector("#thumb3");

const btnReset = document.querySelector("#btnReset");





const numberBtns = document.querySelectorAll('.number-btn');
const display = document.querySelector("#display");
let initialZeroReplaced = false;


// NUMBER BUTTON INPUTS
numberBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (!initialZeroReplaced) {
            display.textContent = buttonText;
            initialZeroReplaced = true;
        } else {
            display.textContent += buttonText;
        }
    });
});

// DELETE BUTTON
const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener('click', () => {
    let currentText = display.textContent;

    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        display.textContent = currentText;
    }
});


// MATH BUTTONS
const mathBtns = document.querySelectorAll('.math-btn')
let isStoredNumber = false
let storedNumber

mathBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        const mathInput = button.textContent;
        if (!isStoredNumber) {
            storedNumber = display.textContent + ' ' + mathInput
            isStoredNumber = true
        } else {
            storedNumber = storedNumber + ' ' + display.textContent + ' ' + mathInput
        }
        display.textContent = '0'
        initialZeroReplaced = false
        console.log(storedNumber)
    });
});

// EQUALS BUTTON 
const btnEquals = document.querySelector("#btnEquals");
let calculatedNumber

btnEquals.addEventListener('click', () => {
    let calculation = storedNumber + ' ' + display.textContent
    calculatedNumber = eval(calculation);
    display.textContent = calculatedNumber
})
