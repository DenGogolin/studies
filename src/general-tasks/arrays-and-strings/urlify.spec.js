const urlify = require("./urlify"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("URLify", () => {
			expect(urlify("Mr John Smith")).to.equal("Mr%20John%20Smith");
		});
	});
});
