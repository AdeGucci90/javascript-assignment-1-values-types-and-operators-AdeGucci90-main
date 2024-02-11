/**
 * DO NOT MODIFY THIS FILE
 */

// Import the functions to be tested
const { multiplication, division } = require("../multiplicationDivision");

/**
 * Test the multiplication function
 */
describe("multiplication", () => {
	it("multiplies two numbers: 5 and 6", () => {
		const expectedProduct = "30.00";
		const actualProduct = multiplication(5, 6);
		expect(actualProduct).toEqual(expectedProduct);
	});
	it("multiplies two numbers: 11 and 12", () => {
		const expectedProduct = "132.00";
		const actualProduct = multiplication(11, 12);
		expect(actualProduct).toEqual(expectedProduct);
	});
});

/**
 * Test the division function
 */
describe("division", () => {
	it("divides two numbers: 5 and 6", () => {
		const expectedQuotient = "0.83";
		const actualQuotient = division(5, 6);
		expect(actualQuotient).toEqual(expectedQuotient);
	});
	it("divides two numbers: 11 and 12", () => {
		const expectedQuotient = "0.92";
		const actualQuotient = division(11, 12);
		expect(actualQuotient).toEqual(expectedQuotient);
	});
});
