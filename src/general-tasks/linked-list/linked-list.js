const LinkedListItem = require("./linked-list-item");

module.exports = class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	*[Symbol.iterator]() {
		let item = this.head;
		while (item) {
			yield item;
			item = item.next;
		}
	}

	static from(x) {
		const newList = new LinkedList();
		if (x instanceof String || x instanceof Array) {
			for (let i of x) {
				newList.push(i);
			}
		}
		if (x instanceof Number) {
			for (let i = 0; i < x; i++) {
				newList.push(0);
			}
		}
		return newList;
	}

	unshift(value) {
		const newItem = new LinkedListItem(value, null, this.head);
		if (this.head) {
			this.head.prev = newItem;
		}
		if (!this.tail) {
			this.tail = newItem;
		}
		this.head = newItem;
		this.length++;
	}

	push(value) {
		const newItem = new LinkedListItem(value, this.tail, null);
		if (this.tail) {
			this.tail.next = newItem;
		}
		if (!this.head) {
			this.head = newItem;
		}
		this.tail = newItem;
		this.length++;
	}

	removeByIndex(i) {
		if (i === 0) {
			return this.shift();
		}
		if (i === this.length - 1) {
			return this.pop();
		}
		let count = 0;
		for (let x of this) {
			if (i === count) {
				return this.remove(x);
			}
			count++;
		}
		return null;
	}

	remove(item) {
		if (item === this.head) {
			return this.shift();
		}
		if (item === this.tail) {
			return this.pop();
		}
		item.next.prev = item.prev;
		item.prev.next = item.next;
		this.length--;
		return item;
	}

	shift() {
		const temp = this.head;
		if (this.head) {
			this.head = this.head.next;
			if (this.head) {
				this.head.prev = null;
			}
			this.length--;
		}
		return temp;
	}

	pop() {
		const temp = this.tail;
		if (this.tail) {
			this.tail = this.tail.prev;
			if (this.tail) {
				this.tail.next = null;
			}
			this.length--;
		}
		return temp;
	}

	toArray() {
		return [...this].map(x => x.value);
	}

	removeDuplicates() {
		for (let x of this) {
			for (let y of this) {
				if (x !== y && x.value === y.value) {
					this.remove(y);
				}
			}
		}
		return this;
	}

	fromEndSingle(k) {
		let i = 0;
		for (let x of this) {
			if (i === this.length - k) {
				return x;
			}
			i++;
		}
		return null;
	}

	deleteMiddleSingle(value) {
		let prev = null;
		for (let x of this) {
			if (x.value === value) {
				x.next.prev = prev;
				prev.next = x.next;
				x = null;
				this.length--;
			} else {
				prev = x;
			}
		}
		return this;
	}

	partitionSingle(value) {
		let item = this.head;
		for (let i = 0; i < this.length; i++) {
			if (item) {
				if (item.value >= value) {
					this.remove(item);
					this.push(item.value);
				}
				item = item.next;
			}
		}
		return this;
	}
};
