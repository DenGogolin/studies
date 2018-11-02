const find = require("./find-word-in-field"),
	{ expect } = require("chai");

describe("Tasks", () => {
	const field = [
		'absoap',
		'ohlaoh',
		'oelaoh',
		'oelooh'
	]
	it("Find word in field = true", () => {
		expect(find(field, "hello")).to.deep.equal(true);
	});
	it("Find word in field = false", () => {
		expect(find(field, "hellp")).to.deep.equal(false);
	});
});
