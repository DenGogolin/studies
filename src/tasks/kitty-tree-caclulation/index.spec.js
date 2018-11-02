const { expect } = require("chai");
const { calculate } = require("./index");
const input1 = require("./input01.json");
const output1 = require("./output01.json");
const treeInput1 = require("./tree01.json");
const { getTree } = require("./get-tree");

describe("Tasks", () => {
	describe("Kitty's tree calculation", () => {
		it("Calculation is correct - 1st HR case", () => {
			const result = calculate(getTree(treeInput1), [
				[], input1[5]
			]);
			expect(result).to.deep.equal([output1[2]]);
		});
	});
});
