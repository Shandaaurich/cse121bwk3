/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

function add(number1, number2) {
    return (number1 + number2)
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {

    const number1 = parseInt(document.getElementById("addend1").value);
    const number2 = parseInt(document.getElementById("addend2").value);

    const numberSum = add(number1, number2);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector("#sum").value = numberSum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

document.getElementById("addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

const subtract = function (number1, number2) {
    return (number1 - number2)
}

const subtractNumbers = function () {
    const number1 = parseInt(document.getElementById("minuend").value);
    const number2 = parseInt(document.getElementById("subtrahend").value);

    const numberSub = subtract(number1, number2);
    console.log(numberSub)

    document.querySelector("#difference").value = numberSub;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (fact1, fact2) => fact1 * fact2;

const mulitplyNumbers = () => {
    const fact1 = parseInt(document.getElementById("factor1").value);
    const fact2 = parseInt(document.getElementById("factor2").value);

    document.querySelector("#product").value = multiply(fact1, fact2);
}

document.getElementById("multiplyNumbers").addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (div1, div2) => div1 / div2;

const divideNumbers = () => {
    const div1 = parseInt(document.getElementById("dividend").value);
    const div2 = parseInt(document.getElementById("divisor").value);

    document.querySelector("#quotient").value = divide(div1, div2);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

const current_date = new Date();

// Step 2: Declare a variable to hold the current year

const year = new Date().getFullYear();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

const current_year = current_date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector("#year").innerHTML = current_year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.getElementById("array").innerHTML = arrNumbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

const odds = arrNumbers.filter(odd => (odd % 2) !== 0);

document.getElementById("odds").innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

const evens = arrNumbers.filter(even => (even % 2) == 0);

document.getElementById("evens").innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

const arrSum = arrNumbers.reduce((current, next) => (current + next));

document.getElementById("sumOfArray").innerHTML = arrSum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const mapArr = arrNumbers.map((num) => (num * 2));

document.getElementById("multiplied").innerHTML = mapArr;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const mapSum = mapArr.reduce((current, next) => (current + next));

document.getElementById("sumOfMultiplied").innerHTML = mapSum;