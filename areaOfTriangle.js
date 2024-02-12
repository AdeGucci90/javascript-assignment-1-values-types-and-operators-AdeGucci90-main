/**
 * Write a JavaScript function that finds the area of a triangle
 * given the lengths of three of its sides
 * The name of your function must be areaOfTriangle
 * The function must take 3 arguments corresponding
 * to the length of one side of the trianle: a, b and c.
 * The function must return the area of the triangle.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here
function areaOfTriangle(a, b, c) {
    // Calculate the semi-perimeter
    var s = (a + b + c) / 2;

    // Calculate the area of triangle using Heron's formula
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Round off the area to 2 decimal places 
    area = Math.round(area * 100) / 100;

    return area;
}

// Example:
var side1 = 3;
var side2 = 4;
var side3 = 5;
var area = areaOfTriangle(side1, side2, side3);
console.log("Area of the triangle:", area);

// End of code

// Do not modify code below this line.
// --------------------------------
