const getPairTo = require("./root-pairs"),
	{ expect } = require("chai");

describe("Tasks", () => {
	it("Root pairs", () => {
		const wordLists = [`tokyo`, `kyoto`, `kyoto`, `yotok`, `oytko`, `kieto`, `koyto`];
		const word = `tokyo`;
		const results = [`kyoto`, `yotok`];
		expect(getPairTo(wordLists, word)).to.deep.equal(results);
	});
});
