const { findRoute } = require("./find-route"),
	{ expect } = require("chai");
const { BinaryTree } = require("../../algorithms/tree/binary-tree");
const { Tree } = require("../../algorithms/tree");
const { buildOrder } = require("./build-order");

describe("General Tasks", () => {
	describe("Trees and Graphs", () => {
		it("Minimal BST", () => {
			expect(
				BinaryTree.fromArray([1, 2, 3, 4, 5, 6, 7, 8]).toArray()
			).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
		});
		it("Depth list", () => {
			expect(
				BinaryTree.fromArray([1, 2, 3, 4, 5, 6, 7, 8]).listsOfDepth
			).to.deep.equal([[5], [3, 7], [2, 4, 6, 8], [1]]);
		});
		it("Is BST", () => {
			expect(
				BinaryTree.fromArray([1, 2, 3, 4, 5, 6, 7, 8]).isBST
			).to.deep.equal(true);
		});
		it("Is not BST", () => {
			expect(
				BinaryTree.fromArray([6, 9, 3, 4, 5, 1, 2, 8]).isBST
			).to.deep.equal(false);
		});
		it("Iterator", () => {
			const it = BinaryTree.fromArray([1, 2, 3, 4, 5, 6, 7, 8])[
				Symbol.iterator
			]();
			expect(it.next().value).to.deep.equal(1);
		});
		it("Build Order", () => {
			expect(
				buildOrder(
					["a", "b", "c", "d", "e", "f"],
					[["a", "d"], ["f", "b"], ["b", "d"], ["f", "a"], ["d", "c"]]
				)
			).to.deep.equal(["e", "f", "b", "a", "d", "c"]);
		});
	});
});
