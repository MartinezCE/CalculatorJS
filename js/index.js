
const displayPreviousValue = document.getElementById('previousValue');
const displayCurrentValue = document.getElementById('currentValue');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const clear = document.getElementsByClassName('clear');

const display = new Display(displayPreviousValue,displayCurrentValue);

number.forEach(button =>{
button.addEventListener('click',()=> display.addNumber(button.innerHTML))
})

operator.forEach(button=>{
    button.addEventListener('click', ()=> display.addOperator(button.value))
})