# odin-calculator

This is my final JavaScript project for The Odin Project Foundations course!

## GOALS ##
1. Create a calculator with the following basic functions
    -add
    -subtract
    -multiply
    -divide
2. Create a function "operate()" that takes an operator and 2 numbers, and then calls one of the above functions on the numbers.
3. Create a basic HTML calrulator with:
    -buttons for each digit
    -buttons for each function in #1
    -button for "=" key
    -display
    -button to clear
4. Create functions that populate the display when you click the number buttons
    -store the "display value" in a variable
5. Make the calculator work
    -store the first number and which operation has been chosen
    -operate() when "=" is pressed
    -once operate() has been called, update display with the solution

## BUGS TO AVOID ##
1. Make sure that the user can string multiple operations together and get the correct answer
    -should be able to input more than 2 numbers
    -should only evaluate ONE pair of numbers at a time
    -TEST: 12 + 7 - 5 * 3 = 42
        1. 12 + 7 = 19
        2. 19 - 5 = 14
        3. 14 * 3 = 42
2. Round answers with long decimals
3. Pressing = before entering all numbers or an operator could cause problems
4. Pressing "clear" should wipe out any existing data
5. Display error message if user tries to divide by 0

## EXTRA CREDIT ##
1. Add a "." button to allow users to input decimals
    -disable this button if there is a "." in the display
2. Make it look nice with CSS
3. Add a "backspace" button
4. Add keyboard support

## PERSONAL CHALLENGE ##
It is really irritating to me that the way this lesson is designed, I am supposed to ignore order of operations. I have a personal goal to have a truly functional calculator when I am done, so the test above will actually result in 4 which is the real world answer.
    -TEST: 12 + 7 - 5 * 3 = 4
        1. 5*3 = 15
        2. 12+7 = 19
        3. 19-15 = 4
