const matrixRotate = require("./rotate-matrix"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("Matrix rotate", () => {
			expect(matrixRotate([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9]
			])).to.deep.equal([
				[7, 4, 1],
				[8, 5, 2],
				[9, 6, 3]
			]);
		});
		it("Matrix rotate anti clockwise", () => {
			expect(matrixRotate([
				[1, 2, 3, 4],
				[5, 6, 7, 8],
				[9, 10, 11, 12],
				[13, 14, 15, 16],
			], false)).to.deep.equal([
				[4, 8, 12, 16],
				[3, 7, 11, 15],
				[2, 6, 10, 14],
				[1, 5, 9, 13],
			]);
		});
	});
});
