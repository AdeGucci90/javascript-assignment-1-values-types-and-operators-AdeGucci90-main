/**
 * DO NOT MODIFY THIS FILE
 */

// Import the functions to be tested
const {
	celciusToFahrenheit,
	fahrenheitToCelcius,
} = require("../celciusFahrenheit");

/**
 * Test the celciusToFahrenheit function
 */
describe("celciusToFahrenheit", () => {
	it("converts 0 degrees Celcius to Fahrenheit", () => {
		const expectedFahrenheit = "32.00";
		const actualFahrenheit = celciusToFahrenheit(0);
		expect(actualFahrenheit).toEqual(expectedFahrenheit);
	});
	it("converts 100 degrees Celcius to Fahrenheit", () => {
		const expectedFahrenheit = "212.00";
		const actualFahrenheit = celciusToFahrenheit(100);
		expect(actualFahrenheit).toEqual(expectedFahrenheit);
	});
});

/**
 * Test the fahrenheitToCelcius function
 */
describe("fahrenheitToCelcius", () => {
	it("converts 32 degrees Fahrenheit to Celcius", () => {
		const expectedCelcius = "0.00";
		const actualCelcius = fahrenheitToCelcius(32);
		expect(actualCelcius).toEqual(expectedCelcius);
	});
	it("converts 212 degrees Fahrenheit to Celcius", () => {
		const expectedCelcius = "100.00";
		const actualCelcius = fahrenheitToCelcius(212);
		expect(actualCelcius).toEqual(expectedCelcius);
	});
});
