/**
 * DO NOT MODIFY THIS FILE
 */

// Import the function to test
const { trueOrFalse } = require("../trueOrFalse");

/**
 * Test the trueOrFalse function
 */
describe("trueOrFalse", () => {
	it("returns true when the sum of 2 numbers is greater than 100", () => {
		expect(trueOrFalse(50, 51)).toEqual(true);
	});
	it("returns false when the sum of 2 numbers is less than or equal to 100", () => {
		expect(trueOrFalse(50, 50)).toEqual(false);
	});
});
