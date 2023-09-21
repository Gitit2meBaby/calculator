// NUMBER BUTTON INPUTS
const numberBtns = document.querySelectorAll('.number-btn');
const display = document.querySelector("#display");
let initialZeroReplaced = false;

numberBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === '.') {
            // Check if a decimal point already exists in the display content
            if (!display.textContent.includes('.')) {
                display.textContent += buttonText;

            }
        } else if (!initialZeroReplaced || isLastCalculation) {
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
const mathBtns = document.querySelectorAll('.math-btn');
let isStoredNumber = false;
let storedNumber;

mathBtns.forEach(function (button) {
    button.addEventListener('click', () => {
        const mathInput = button.textContent;

        // Replace "x" with "*" in the storedNumber string
        if (!isStoredNumber) {
            storedNumber = display.textContent + ' ' + mathInput.replace(/x/g, '*');
            isStoredNumber = true;
        } else {
            storedNumber = storedNumber + ' ' + display.textContent + ' ' + mathInput.replace(/x/g, '*');
        }

        display.textContent = '0';
        initialZeroReplaced = false;
        console.log(storedNumber);
    });
});

// EQUALS BUTTON 
const btnEquals = document.querySelector("#btnEquals");
let calculatedNumber
let isLastCalculation = false

btnEquals.addEventListener('click', () => {
    let calculation = storedNumber + ' ' + display.textContent
    calculatedNumber = eval(calculation);
    display.textContent = calculatedNumber
    console.log(storedNumber)
    storedNumber = ''
    isLastCalculation = true
})

// RESET BUTTON 
const btnReset = document.querySelector("#btnReset");

btnReset.addEventListener('click', () => {
    display.textContent = '0'
    storedNumber = ''
    initialZeroReplaced = false
    console.log(storedNumber)
})

// THEME SWITCHER
const body = document.querySelector('.body')
const thumb1 = document.querySelector("#thumb1");
const thumb2 = document.querySelector("#thumb2");
const thumb3 = document.querySelector("#thumb3");

thumb1.addEventListener('click', () => {
    thumb1.style.opacity = '1'
    thumb2.style.opacity = '0'
    thumb3.style.opacity = '0'
    body.classList.remove('theme2')
    body.classList.remove('theme3')
    body.classList.add('theme1')
})
thumb2.addEventListener('click', () => {
    thumb1.style.opacity = '0'
    thumb2.style.opacity = '1'
    thumb3.style.opacity = '0'
    body.classList.remove('theme1')
    body.classList.remove('theme3')
    body.classList.add('theme2')
})
thumb3.addEventListener('click', () => {
    thumb1.style.opacity = '0'
    thumb2.style.opacity = '0'
    thumb3.style.opacity = '1'
    body.classList.remove('theme1')
    body.classList.remove('theme2')
    body.classList.add('theme3')
})





