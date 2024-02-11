/**
 * Write a JavaScript function that takes in two numbers
 * and returns true if the sum of both numbers is
 * greater than 100 and returns false otherwise.
 * The name of your function must be trueOrFalse.
 * The function must take 2 arguments corresponding
 * to the numbers to be summed up: m and n.
 * The function must return true if the
 * sum of the numbers is greater than 100 and
 * return false otherwise.
 */

// Write your code here 
function trueOrFalse(x, y) {
    // Calculate the sum of the numbers //
    var sum = x + y;
    // Check if the sum is greater than 100 //
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}

// Example //
var number1 = 60;
var number2 = 50;
var result = trueOrFalse(number1, number2);
console.log("Is the sum greater than 100?", result);


// End of code

// Do not modify code below this line.
// --------------------------------
module.exports = { trueOrFalse };
