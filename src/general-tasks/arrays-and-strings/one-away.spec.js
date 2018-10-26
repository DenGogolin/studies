const oneAway = require("./one-away"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("one away = true", () => {
			expect(oneAway("pale", "ple")).to.equal(true);
		});
		it("one away = true", () => {
			expect(oneAway("pales", "pale")).to.equal(true);
		});
		it("one away = true", () => {
			expect(oneAway("pale", "bale")).to.equal(true);
		});
		it("one away = false", () => {
			expect(oneAway("pale", "bake")).to.equal(false);
		});
	});
});
