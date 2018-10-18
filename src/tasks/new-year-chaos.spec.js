const minBr = require("./new-year-chaos"),
	{ expect } = require("chai");

describe("Tasks", () => {
	describe("New Year Chaos", () => {
		it("1st", () => {
			const q = [1, 2, 5, 3, 7, 8, 6, 4];
			const result = 7;
			expect(minBr(q)).to.equal(result);
		});
		it("2nd", () => {
			const q = [1, 4, 3, 2, 5, 6];
			const result = 3;
			expect(minBr(q)).to.equal(result);
		});
		it("Too chaotic", () => {
			const q = [5, 1, 2, 3, 7, 8, 6, 4];
			const result = "Too chaotic";
			expect(minBr(q)).to.equal(result);
		});
		it("Too chaotic 2nd", () => {
			const q = [2, 5, 1, 3, 4];
			const result = "Too chaotic";
			expect(minBr(q)).to.equal(result);
		});
	});
});
