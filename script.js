let solution = "test";
let display = document.querySelector("#displayValue");

//basic math functions
function add (num1, num2){
    solution = num1 + num2;
    return solution;
};
function subtract (num1, num2){
    solution = num1 - num2;
    return solution;
};
function multiply (num1, num2){
    solution = num1 * num2;
    return solution;
};
function divide (num1, num2){
    solution = num1 / num2;
    return solution;
};

function operate (num1, operator, num2){
    if (operator == "+"){
        return add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1, num2);
    } else if (operator == "*"){
        return multiply(num1, num2);
    } else if (operator == "/"){
        if (num2 == 0){
            return "No dividing by zero, dummy!"
        } else {
            return divide(num1, num2);
        };
    };
    return solution;
};

//event listeners that update the display when buttons are clicked
let numbers = document.querySelectorAll(".numberButton");
numbers.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    });
});
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "";
});
let backspace = document.querySelector("#back");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,-1);
});
let operators = document.querySelectorAll(".operatorButton");
operators.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    });
});
let parens = document.querySelector("#parens");
parens.addEventListener("click", () =>{
        ////need a toggle function "(" then ")"
});
let percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
            ////need logic to move decimal 2 to the left
});
let dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
            ////need logic to only add ONE "."
});
let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
            ////need logic to call operate() function correctly
    display.textContent = solution;
});