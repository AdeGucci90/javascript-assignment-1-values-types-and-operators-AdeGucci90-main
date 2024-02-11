/**
 * DO NOT MODIFY THIS FILE
 */

// Import the function to test
const { areaOfTriangle } = require("../areaOfTriangle");

/**
 * Test the areaOfTriangle function
 */
describe("areaOfTriangle", () => {
	it("calculates the area of a triangle given the lengths of its sides: 5, 6 and 7", () => {
		const expectedArea = "14.70";
		const actualArea = areaOfTriangle(5, 6, 7);
		expect(actualArea).toEqual(expectedArea);
	});
	it("calculates the area of a triangle given the lengths of its sides: 11, 12 and 13", () => {
		const expectedArea = "61.48";
		const actualArea = areaOfTriangle(11, 12, 13);
		expect(actualArea).toEqual(expectedArea);
	});
});
