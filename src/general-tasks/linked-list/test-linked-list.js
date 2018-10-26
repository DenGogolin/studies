const LinkedList = require("./linked-list");

module.exports = {
	removeDuplicates: arr =>
		LinkedList.from(arr)
			.removeDuplicates()
			.toArray(),
	findKFromEnd: (arr, k) => LinkedList.from(arr).fromEndSindgle(k).value,
	deleteMiddle: (arr, value) =>
		LinkedList.from(arr)
			.deleteMiddleSingle(value)
			.toArray(),
	partition: (arr, value) =>
		LinkedList.from(arr)
			.partitionSingle(value)
			.toArray()
};
