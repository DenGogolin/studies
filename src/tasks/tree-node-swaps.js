const mapTreeToArray = tree => {
	const joinNodes = i => {
		if (tree[i - 1]) {
			const left = tree[i - 1][0] !== -1 ? joinNodes(tree[i - 1][0]) : [];
			const rigth = tree[i - 1][1] !== -1 ? joinNodes(tree[i - 1][1]) : [];
			return [...left, i, ...rigth];
		}
		return [];
	};
	return joinNodes(1);
};

const buildLvlHash = tree => {
	const hash = {
		1: [1]
	};
	const getLvl = (i, lvl) => {
		if (tree[i]) {
			let indexes = tree[i].filter(x => x !== -1);
			if (indexes.length) {
				for (let j = 0; j < indexes.length; j++) {
					getLvl(indexes[j] - 1, lvl + 1);
				}
				if (hash[lvl]) {
					indexes = hash[lvl].concat(indexes);
				}
				hash[lvl] = indexes;
			}
		}
	};
	getLvl(0, 2);
	return hash;
};

const performQueries = (tree, queries) => {
	const result = [];
	const hash = buildLvlHash(tree);
	for (let i = 0; i < queries.length; i++) {
		let j = 1;
		let lvl = hash[queries[i] * j];
		while (lvl && lvl.length) {
			for (let k = 0; k < lvl.length; k++) {
				const index = lvl[k];
				tree[index - 1] = tree[index - 1].reverse();
			}
			lvl = hash[queries[i] * ++j];
		}
		result.push(mapTreeToArray(tree));
	}
	return result;
};

module.exports = {
	mapTreeToArray,
	performQueries
};
