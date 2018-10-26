const zeroMatrix = require("./zero-matrix"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("Zero Matrix", () => {
			expect(zeroMatrix([
				[1, 2, 3, 4, 2],
				[5, 6, 0, 8, 7],
				[9, 10, 11, 12, 9],
				[0, 14, 15, 16, 1],
			])).to.deep.equal([
				[0, 2, 0, 4, 2],
				[0, 0, 0, 0, 0],
				[0, 10, 0, 12, 9],
				[0, 0, 0, 0, 0],
			]);
		});
	});
});
