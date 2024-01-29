/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let sum = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    let difference = subtract(subtractNumber1, subtractNumber2);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);

}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number (document.querySelector("#factor1").value);
    let factor2 = Number (document.querySelector("#factor2").value);

    let product = multiply(factor1, factor2);

    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x,y) => x/y;
const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    if (document.getElementById("member").checked) {
        subtotal = subtotal * 0.8 // 20% discount
    }
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}   
document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number =>number%2 === 1);
document.querySelector("#odds").innerHTML = oddNumbers;

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number %2 === 0);

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum,number) => sum+number, 0);
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number*2);
document.querySelector("#multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((sum, number) =>sum + number,0);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;