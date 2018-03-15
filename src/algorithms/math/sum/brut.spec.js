const sum = require("./brut"),
	{ expect } = require("chai");

describe("Algorithms", () => {
	describe("Sum", () => {
		describe("Brut", () => {
			it(`1st case`, () => {
				expect(sum(`99999999`, `99999999`)).to.equal(`199999998`);
			});
			it(`2st case`, () => {
				expect(sum(`511524124151`, `13251`)).to.equal(`511524137402`);
			});
			it(`3st case`, () => {
				expect(sum(`15`, `4`)).to.equal(`19`);
			});
			it(`4st case`, () => {
				expect(sum(`0`, `0`)).to.equal(`0`);
			});
		});
	});
});