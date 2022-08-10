function add(a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function operate(a,operation,b) {
    if (operation==divide && b == 0) {
        alert ("That's not possible! You do... know that that's impossible... right? Maybe try something else.")
    }
    else {
        return operation(a,b);
    }
}

const display = document.querySelector('.display');

const button0 = document.querySelector('#zero');
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');
const buttonPlus = document.querySelector('#add');
const buttonMinus = document.querySelector('#subtract');
const buttonMultiply = document.querySelector('#multiply');
const buttonDivide = document.querySelector('#divide');
const buttonEquals = document.querySelector('#equals');
const buttonClear = document.querySelector('#clear');
const buttonDecimal = document.querySelector('#decimal');

function calculate() {
    let numberArray = [];
    let number = undefined;
    let operandOne;
    let operandTwo;
    let operation;

    button0.addEventListener('click', ()=> {
        numberArray.push(0);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button1.addEventListener('click', ()=> {
        numberArray.push(1);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button2.addEventListener('click', ()=> {
        numberArray.push(2);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button3.addEventListener('click', ()=> {
        numberArray.push(3);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button4.addEventListener('click', ()=> {
        numberArray.push(4);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button5.addEventListener('click', ()=> {
        numberArray.push(5);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button6.addEventListener('click', ()=> {
        numberArray.push(6);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button7.addEventListener('click', ()=> {
        numberArray.push(7);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button8.addEventListener('click', ()=> {
        numberArray.push(8);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    button9.addEventListener('click', ()=> {
        numberArray.push(9);
        //console.log(numberArray)
        numberString = numberArray.join("");
        //console.log(numberString)
        number = Number(numberString);
        //console.log(number)
        display.textContent= number;
    });
    buttonDecimal.addEventListener('click', ()=> {
        let hasDecimal = false;
        length = numberArray.length;
        for (let i = 0; i < length ; i++){
            if (numberArray[i] == ".") {
                hasDecimal = true;
            }
        }
        if (hasDecimal == false){
            numberArray.push(".");
            //console.log(numberArray)
            numberString = numberArray.join("");
            //console.log(numberString)
            number = Number(numberString);
            //console.log(number)
            display.textContent= number;
        }
    });

    buttonMultiply.addEventListener('click', ()=> {
        if (operandOne == undefined || operandOne == null) {
            operandOne = number;
            number = undefined;
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= "";
            display.textContent= number;
            operation = multiply;
        } else if (operandTwo == undefined){
            operandTwo = number;
            number = operate(operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= number;
            operandOne = number;
            operandTwo = undefined;
            operation = multiply;
            number = undefined;
        } else {
            number = operate (operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent = "";
            display.textContent = number;
            operandOne = number;
            operation = multiply;
            operandTwo = undefined;
            number = undefined;
        }
        numberArray = [];
    });
    buttonDivide.addEventListener('click', ()=> {
        if (operandOne == undefined || operandOne == null) {
            operandOne = number;
            number = undefined;
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= "";
            display.textContent= number;
            operation = divide;
        } else if (operandTwo == undefined){
            operandTwo = number;
            number = operate(operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= number;
            operandOne = number;
            operandTwo = undefined;
            operation = divide;
            number = undefined;
        } else {
            number = operate (operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent = "";
            display.textContent = number;
            operandOne = number;
            operation = divide;
            operandTwo = undefined;
            number = undefined;
        }
        numberArray = [];
    });
    buttonPlus.addEventListener('click', ()=>{
        if (operandOne == undefined || operandOne == null) {
            operandOne = number;
            number = undefined;
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= "";
            display.textContent= number;
            operation = add;
        } else if (operandTwo == undefined){
            operandTwo = number;
            number = operate(operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= number;
            operandOne = number;
            operandTwo = undefined;
            operation = add;
            number = undefined;
        } else {
            number = operate (operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent = "";
            display.textContent = number;
            operandOne = number;
            operation = add;
            operandTwo = undefined;
            number = undefined;
        }
        numberArray = [];
    });
    buttonMinus.addEventListener('click', ()=> {
        if (operandOne == undefined || operandOne == null) {
            operandOne = number;
            number = undefined;
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= "";
            display.textContent= number;
            operation = subtract;
        } else if (operandTwo == undefined){
            operandTwo = number;
            number = operate(operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent= number;
            operandOne = number;
            operandTwo = undefined;
            operation = subtract;
            number = undefined;
        } else {
            number = operate (operandOne,operation,operandTwo);
            console.log ("Operand 1 is "+operandOne);
            console.log ("Operand 2 is "+operandTwo);
            console.log ("Number is "+number);
            display.textContent = "";
            display.textContent = number;
            operandOne = number;
            operation = subtract;
            operandTwo = undefined;
            number = undefined;
        }
        numberArray = [];
    });

    buttonEquals.addEventListener('click', ()=> {
        operandTwo = number;
        number = operate(operandOne,operation,operandTwo);
        number = Math.round(1000*number)/1000;
        console.log ("Operand 1 is "+operandOne);
        console.log ("Operand 2 is "+operandTwo);
        console.log ("Number is "+number);
        display.textContent= number;
        operandOne = number;
        operandTwo = undefined;
        operand = undefined;
        number = 0;
        numberArray = [];
    });

    buttonClear.addEventListener('click', ()=> {
        numberArray = [];
        number = undefined;
        display.textContent= "";
        operandOne = null;
        operandTwo = null;
    });
}

calculate();