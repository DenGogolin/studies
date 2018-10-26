const isUnique = require("./is-unique"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("is unique = true", () => {
			expect(isUnique("abcdefg")).to.equal(true);
		});
		it("is unique = false", () => {
			expect(isUnique("abcadebfgg")).to.equal(false);
		});
	});
});
