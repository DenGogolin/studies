module.exports = class LinkedListItem {
	constructor (value, prev = null, next = null) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}

}