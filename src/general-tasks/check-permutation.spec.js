const checkPermutation = require("./check-permutation"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("is permutation = true", () => {
			expect(checkPermutation("tokyo", "kyoto")).to.equal(true);
		});
		it("is permutation = false", () => {
			expect(checkPermutation("tokyo", "kyota")).to.equal(false);
		});
	});
});