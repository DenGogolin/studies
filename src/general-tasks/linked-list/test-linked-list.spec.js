const {
		removeDuplicates,
		findKFromEnd,
		deleteMiddle, 
		partition
	} = require("./test-linked-list"),
	{ expect } = require("chai");

describe("General tasks", () => {
	describe("Linked List", () => {
		const base = [1, 3, 3, 3, 5, 5, 6, 1, 2, 3, 4, 5, 3];
		it("Remove duplicates", () => {
			expect(removeDuplicates(base)).to.deep.equal([1, 3, 5, 6, 2, 4]);
		});
		it("Find  k from end", () => {
			expect(findKFromEnd(base, 5)).to.equal(2);
		});
		it("delete middle", () => {
			expect(deleteMiddle(base, 6)).to.deep.equal([1, 3, 3, 3, 5, 5, 1, 2, 3, 4, 5, 3]);
		});
		it("partition", () => {
			expect(partition(base, 4)).to.deep.equal([1, 3, 3, 3, 1, 2, 3, 3, 5, 5, 6, 4, 5]);
		});
	});
});
