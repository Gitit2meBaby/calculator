const thumb1 = document.querySelector("#thumb1");
const thumb2 = document.querySelector("#thumb2");
const thumb3 = document.querySelector("#thumb3");

const display = document.querySelector("#display");

const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const deleteButton = document.querySelector("#delete");

const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btnAddition = document.querySelector("#btnAddition");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btnMinus = document.querySelector("#btnMinus");

const btnDecimal = document.querySelector("#btnDecimal");
const btn0 = document.querySelector("#btn0");
const btnDivide = document.querySelector("#btnDivide");
const btnMultiply = document.querySelector("#btnMultiply");

const btnReset = document.querySelector("#btnReset");
const btnEquals = document.querySelector("#btnEquals");

function updateDisplay() {

}


// JavaScript code to toggle themes
const container = document.querySelector('.container');
const themeButtons = document.querySelectorAll('.theme-button');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const themeClass = button.dataset.theme;
        container.className = `container ${themeClass}`;
    });
});
