const { getGCD, getGCDFromArray } = require("./gcd"),
	{ expect } = require("chai");

const testForArr = (arr, result) =>
	it(`from ${arr}`, () => expect(getGCDFromArray(arr)).to.equal(result));

describe("Tasks", () => {
	describe("GCD", () => {
		it("100 and 10", () => expect(getGCD(100, 10)).to.equal(10));
		it("7 and 3", () => expect(getGCD(7, 3)).to.equal(1));
		it("3 and 3", () => expect(getGCD(3, 3)).to.equal(3));
		it("2 and 6", () => expect(getGCD(2, 6)).to.equal(2));
		testForArr([5, 25, 40, 15, 5], 5);
		testForArr([2, 3, 4, 5, 6], 1);
	});
});
