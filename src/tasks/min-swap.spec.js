const minSwap = require("./min-swap"),
	{ expect } = require("chai");

describe("Tasks", () => {
	describe("Minimum Swaps", () => {
		it("1st", () => {
			const q = [7, 1, 3, 2, 4, 5, 6];
			const result = 5;
			expect(minSwap(q)).to.equal(result);
		});
	});
});
