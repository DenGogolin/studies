const stringCompression = require("./string-compression"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Arrays and strings", () => {
		it("String Compression", () => {
			expect(stringCompression("abcdefg")).to.equal("abcdefg");
		});
		it("String Compression", () => {
			expect(stringCompression("aabccccaa")).to.equal("a2b1c4a2");
		});
	});
});
