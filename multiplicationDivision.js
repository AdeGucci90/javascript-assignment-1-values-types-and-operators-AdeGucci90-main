/**
 * Write two JavaScript functions that calculate
 * the multiplication and division of two numbers.
 * The name of your first function must be multiplication
 * and the name of the second function must be division.
 * The functions must take 2 arguments corresponding to the
 * numbers to be multiplied or divided: i and j.
 * The multiplication function must return the
 * product of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 * The division function must return the
 * quotient of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here
function multiplication(i, j) {
    // Perform multiplication
    var product = i * j;
    // Round off to 2 decimal places
    product = Math.round(product * 100) / 100;
    return product;
}

function division(i, j) {
    // Perform division
    var quotient = i / j;
    // Round off to 2 decimal places
    quotient = Math.round(quotient * 100) / 100;
    return quotient;
}

// Example usage:
var num1 = 10;
var num2 = 3;
var resultMultiplication = multiplication(num1, num2);
var resultDivision = division(num1, num2);

console.log("Multiplication:", resultMultiplication);
console.log("Division:", resultDivision);

// End of code

// Do not modify code below this line.
// --------------------------------
