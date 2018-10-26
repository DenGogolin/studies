const stringRotation = require("./string-rotation"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("String rotation = true", () => {
			expect(stringRotation("otoky", "tokyo")).to.equal(true);
		});
		it("string rotation = false", () => {
			expect(stringRotation("tokyo", "kyota")).to.equal(false);
		});
	});
});