const calculate = (tree, input) => {
	return getSets(tree, input);
};
const lcaCache = {};
const getLCA = (tree, a, b) => {
	const hashKey = `${a.value}_${b.value}`;
	if (lcaCache.hasOwnProperty(hashKey)) {
		return tree[lcaCache[hashKey]];
	} else {
		if (a.depth === 0) {
			return a;
		}
		if (b.depth === 0) {
			return b;
		}
		if (a.value === b.value) {
			return a;
		}
		while (a.value !== b.value) {
			if (a.depth > b.depth) {
				a = tree[a.root];
			} else if (a.depth === b.depth) {
				a = tree[a.root];
				b = tree[b.root];
			} else {
				b = tree[b.root];
			}
		}
		if (a.value === b.value) {
			lcaCache[hashKey] = a.value;
			return a;
		}
		throw new Error("not found");
	}
};

const lcaSumCache = {};
const getSets = (tree, input) => {
	const mod = Math.pow(10, 9) + 7;
	const calculateObvOpt = set => {
		let result = 0;
		let itemSum = set[0],
			distSum = tree[set[0]].depth * set[0],
			lcaSum = {};
		for (let i = set.length - 1; i >= 1; i--) {
			for (let j = 0; j < i; j++) {
				if (!lcaSum[set[i]]) {
					lcaSum[set[i]] = 0;
				}
				const cacheKey = set[i] + "_" + set[j];
				if (lcaSumCache[cacheKey] === undefined) {
					lcaSumCache[cacheKey] =
						set[j] * getLCA(tree, tree[set[i]], tree[set[j]]).depth;
				}
				lcaSum[set[i]] += lcaSumCache[cacheKey];
			}
		}
		for (let i = 1; i < set.length; i++) {
			const item = set[i];
			const treeItem = tree[item];

			const dist = item * treeItem.depth;

			result += item * distSum + itemSum * dist - 2 * item * lcaSum[item];
			itemSum += item;
			distSum += dist;
		}
		return result && result % mod;
	};
	const result = [];
	for (let i = 0; i < input.length; i++) {
		if (i % 2) result.push(calculateObvOpt(input[i]));
	}
	return result;
};

module.exports = {
	calculate,
	getSets
};
