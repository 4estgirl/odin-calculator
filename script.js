let solution = "test";
let display = document.querySelector("#displayValue");
let displayArray = [];

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


//event listeners that update both display and display value array
let numbers = document.querySelectorAll(".numberButton");
numbers.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        displayArray.push(button.textContent);
        console.log(displayArray);
    });
});
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    displayArray = [];
    console.log(displayArray);
});
let backspace = document.querySelector("#back");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,-1);
    displayArray.pop();
    console.log(displayArray);
});
let operators = document.querySelectorAll(".operatorButton");
operators.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        displayArray.push(button.textContent);
        console.log(displayArray);
    });
});
let parens = document.querySelector("#parens");
parens.addEventListener("click", () =>{
    let open = display.textContent.lastIndexOf("(");
    let close = display.textContent.lastIndexOf(")");
    if (((open == -1) && (close = -1)) || (open < close)){
        display.textContent += "(";
        displayArray.push("(");
        console.log(displayArray);
    } else {
        display.textContent += ")";
        displayArray.push(")");
        console.log(displayArray);
    };
});

//event listeners that update the display when buttons are clicked
let percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    if(display.textContent.length == 0){
        display.textContent = display.textContent;
    } else if (display.textContent.length == 1){
        display.textContent = "0.0" + display.textContent;
    } else if (display.textContent.length == 2){
        display.textContent = "0." + display.textContent;
    } else {
        let first = display.textContent.slice(0, -2);
        let last = display.textContent.slice(-2);
        display.textContent = first + "." + last;
    };
});
let dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
    if (!display.textContent.includes(".")){
        display.textContent += dot.textContent;
    };
});
let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
            ////need logic to call operate() function correctly
    display.textContent = solution;
});