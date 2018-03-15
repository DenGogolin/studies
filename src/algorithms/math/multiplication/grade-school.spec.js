const multiply = require("./grade-school"),
	{ expect } = require("chai");

describe("Algorithms", () => {
	describe("Multiplication", () => {
		describe("Grade School", () => {
			it(`1st case`, () => {
				expect(multiply(`99999999`, `99999999`)).to.equal(`9999999800000001`);
			});
			it(`2st case`, () => {
				expect(multiply(`511524124151`, `13251`)).to.equal(`6778206169124901`);
			});
			it(`3st case`, () => {
				expect(multiply(`15`, `4`)).to.equal(`60`);
			});
			it(`4st case`, () => {
				expect(multiply(`0`, `500000000`)).to.equal(`0`);
			});
		});
	});
});
