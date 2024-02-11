/**
 * DO NOT MODIFY THIS FILE
 */

// Import the function to test
const { addByOne } = require("../addByOne");

/**
 * Test the addByOne function
 */
describe("addByOne", () => {
	it("adds 1 to 5", () => {
		const expectedSum = 6;
		expect(addByOne(5)).toEqual(expectedSum);
	});
	it("adds 1 to 11", () => {
		const expectedSum = 12;
		expect(addByOne(11)).toEqual(expectedSum);
	});
});
