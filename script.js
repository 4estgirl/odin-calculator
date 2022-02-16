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

//evaluate function
function operate (num1, operator, num2){
    if (operator == "+"){
        return add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1, num2);
    } else if (operator == "*"){
        return multiply(num1, num2);
    } else if (operator == "/"){
        if (num2 == 0){
            display.textContent = "No dividing by zero, dummy!";
            return "No dividing by zero, dummy!"
        } else {
            return divide(num1, num2);
        };
    };
    return solution;
};

//PMDAS (no exponent) functions
function checkParens(array){
    array.forEach(item => {
        if (item == "("){
            let open = array.findIndex((element) => element == "(");
            let close = array.findIndex((element) => element == ")");
            let expression = array.slice(open + 1, close);
            let answer = addRemaining(checkDiv(checkMult(expression)));
            array = array.slice(0,open).concat(answer,(array.slice(close+1)));
        };
    });
    return array;
};
function checkMult(array){
    if (array.includes("x") == true){
        let filterX = array.filter((element) => element == "x");
        let runtimes = filterX.length;
        for (i=0; i < runtimes; i++){
            let operatorIndex = array.findIndex((element) => element == "x");
            let operator = "*";
            let num1 = array[operatorIndex - 1];
            let num2 = array[operatorIndex + 1];
            let solution = operate(num1, operator, num2);
            let begin = array.slice(0,(operatorIndex - 1));
            let end = array.slice((operatorIndex + 2));
            array = begin.concat(solution, end);
        };
        return array;
    };
    return array;
};
function checkDiv(array){
    if (array.includes("/") == true){
        let filterX = array.filter((element) => element == "/");
        let runtimes = filterX.length;
        for (i=0; i < runtimes; i++){
            let operatorIndex = array.findIndex((element) => element == "/");
            let operator = "/";
            let num1 = array[operatorIndex - 1];
            let num2 = array[operatorIndex + 1];
            let solution = operate(num1, operator, num2);
            let begin = array.slice(0,(operatorIndex - 1));
            let end = array.slice((operatorIndex + 2));
            array = begin.concat(solution, end);
        };
        return array;
    };
    return array;  
};
function checkSub(array){
    if (array.includes("-") == true){
        let filterX = array.filter((element) => element == "-");
        let runtimes = filterX.length;
        for (i=0; i < runtimes; i++){
            let operatorIndex = array.findIndex((element) => element == "-");
            let operator = "-";
            let num1 = array[operatorIndex - 1];
            let num2 = array[operatorIndex + 1];
            let solution = operate(num1, operator, num2);
            let begin = array.slice(0,(operatorIndex - 1));
            let end = array.slice((operatorIndex + 2));
            array = begin.concat(solution, end);
        };
        return array;
    };
    return array;
};
function checkAdd(array){
    if (array.includes("+") == true){
        let filterX = array.filter((element) => element == "+");
        let runtimes = filterX.length;
        for (i=0; i < runtimes; i++){
            let operatorIndex = array.findIndex((element) => element == "+");
            let operator = "+";
            let num1 = parseFloat(array[operatorIndex - 1]);
            let num2 = parseFloat(array[operatorIndex + 1]);
            let solution = operate(num1, operator, num2);
            let begin = array.slice(0,(operatorIndex - 1));
            let end = array.slice((operatorIndex + 2));
            array = begin.concat(solution, end);
        };
        return array;
    };
    return array;
};
function addRemaining(array){
    let runtimes = array.length - 1;
    console.log("runtimes " + runtimes);
    for (i=0; i < runtimes; i++){
        let operator = "+";
        let num1 = parseFloat(array[0]);
        let num2 = parseFloat(array[1]);
        let solution = operate(num1, operator, num2);
        let end = array.slice(2);
        array =[solution];
        array = array.concat(end);
        console.log("infor " + array);
    };
    console.log("afterfor " + array);
    return array;
};

//event listeners that update both display and display value array
let numbers = document.querySelectorAll(".numberButton");
numbers.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        if(Object.keys(numbers).some(element => displayArray.slice(-1).toString().includes(element) == true)){
            let last = displayArray.slice(-1).toString() + button.textContent;
            displayArray.pop();
            displayArray.push(last);
        } else if (displayArray.slice(-1).includes("-") == true) {
            let last = displayArray.slice(-1).toString() + button.textContent;
            displayArray.pop();
            displayArray.push(last);
        } else if (displayArray.slice(-1).includes("+") == true) {
            let last = displayArray.slice(-1).toString() + button.textContent;
            displayArray.pop();
            displayArray.push(last);
        } else {
            displayArray.push(button.textContent);
        }
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
    if (displayArray[displayArray.length-1].length > 1){
        newEnd = displayArray[displayArray.length-1].slice(0,-1);
        displayArray.pop();
        displayArray.push(newEnd);
        display.textContent = display.textContent.slice(0,-1)
        console.log(displayArray);
    } else {
        display.textContent = display.textContent.slice(0,-1);
        displayArray.pop();
        console.log(displayArray);
    };
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
    let openCount = displayArray.filter((element) => element == "(").length;
    let closeCount = displayArray.filter((element) => element == ")").length;
    if (displayArray[displayArray.length -1] == "("){
        // display.textContent += "(";
        // displayArray.push("(");
        display.textContent = display.textContent;
        displayArray = displayArray;
        console.log(displayArray);
    } else if (((open == -1) && (close = -1))){
        display.textContent += "(";
        displayArray.push("(");
        console.log(displayArray);
    } else if (openCount > closeCount) {
        display.textContent += ")";
        displayArray.push(")");
        console.log(displayArray);
    } else {
        display.textContent += "(";
        displayArray.push("(");
        console.log(displayArray);
    };
});
let dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
    if ((displayArray.slice(-1).toString().includes("."))== true){
        displayArray = displayArray;
        display.textContent = display.textContent;
    }else if((Object.keys(numbers).some(element => displayArray.slice(-1).toString().includes(element) == true))){
        let last = displayArray.slice(-1).toString() + dot.textContent;
        displayArray.pop();
        displayArray.push(last);
        display.textContent += dot.textContent;
    };
});

let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    let solutionArray = addRemaining(checkDiv(checkMult(checkParens(displayArray))));
    display.textContent = parseFloat(solutionArray[0].toFixed(10));
    displayArray = addRemaining(checkDiv(checkMult(checkParens(displayArray))));
    console.log(displayArray);
});

let percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    if ((Object.keys(numbers).some(element => displayArray.slice(-1).toString().includes(element) == true))){
        let newNumber = displayArray.slice(-1) / 100;
        displayArray.pop();
        displayArray.push(newNumber);
        display.textContent = displayArray.join("");
        console.log(displayArray);
    };
});

