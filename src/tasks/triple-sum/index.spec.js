const { tripleSum } = require("./index"),
	{ expect } = require("chai");
const input = require("./input02.json");

describe("Tasks", () => {
	describe("Triple sum", () => {
		it("Heavy load", () => {
			expect(tripleSum(input[0], input[1], input[2])).to.equal(9593177511025);
		});
	});
});
