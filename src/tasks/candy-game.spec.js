const { candyGame } = require("./candy-game"),
	{ expect } = require("chai");

describe("Tasks", () => {
	it("Candy game", () => {
		expect(candyGame(5361, 3918, 8447708, 989936375520)).to.equal(3577);
	});
	it("Candy game 2", () => {
		expect(candyGame(1, 1, 6, 45)).to.equal(16);
	});
	it("Candy game 3", () => {
		expect(candyGame(1, 100, 10000000000, 1000000000000)).to.equal(617737754);
	});
});
