const findPairs = require("./find-pairs"),
	{ expect } = require("chai");

describe("Tasks", () => {
	describe("Find Pairs", () => {
		it("1st", () => {
			const fpl = [[1, 5], [2, 7], [3, 14]];
			const bpl = [[1, 5], [2, 10], [3, 14]];
			const result = [[1, 3], [3, 1]];
			expect(findPairs(20, fpl, bpl)).to.deep.equal(result);
		});
		it("2nd", () => {
			const fpl = [[1, 10], [2, 10], [3, 14]];
			const bpl = [[1, 6], [2, 10], [3, 10]];
			const result = [[1, 2], [1, 3], [2, 2], [2, 3], [3, 1]];
			expect(findPairs(20, fpl, bpl)).to.deep.equal(result);
		});
	});
});
