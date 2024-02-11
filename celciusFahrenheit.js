/**
 * Write two JavaScript functions that convert temperatures
 * to and from Celsius and Fahrenheit.
 * The name of your first function must be celciusToFahrenheit
 * and the name of the second function must be fahrenheitToCelcius.
 * The functions must take one arguments corresponding
 * to the temperature to be converted: temperature.
 * The celciusToFahrenheit function must return
 * the temperature converted from Celcius to Fahrenheit.
 * Round off the returned value to 2 decimal places.
 * The fahrenheitToCelcius function must return
 * the temperature converted from Fahrenheit to Celcius.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here
function celciusToFahrenheit(temperature) {
    // Convert Celsius to Fahrenheit
    var fahrenheit = (temperature * 9/5) + 32;
    // Round off to 2 decimal places //
    fahrenheit = Math.round(fahrenheit * 100) / 100;
    return fahrenheit;
}

function fahrenheitToCelcius(temperature) {
    // Convert Fahrenheit to Celsius
    var celsius = (temperature - 32) * 5/9;
    // Round off to 2 decimal places
    celsius = Math.round(celsius * 100) / 100;
    return celsius;
}

// Example:
var celsiusTemperature = 30;
var fahrenheitTemperature = 86;
var convertedToFahrenheit = celciusToFahrenheit(celsiusTemperature);
var convertedToCelsius = fahrenheitToCelcius(fahrenheitTemperature);

console.log(celsiusTemperature + " Celsius is " + convertedToFahrenheit + " Fahrenheit.");
console.log(fahrenheitTemperature + " Fahrenheit is " + convertedToCelsius + " Celsius.");


// End of code

// Do not modify code below this line.
// --------------------------------
module.exports = { celciusToFahrenheit,fahrenheitToCelcius };
