/* 
	1 build construction with instant access to the dependants and parents
	2 find independent
	3 find ones that are based on them only
	4 then do the same for others
*/
const filterProj = (proj, graph) => {
	const rest = [];
	for (let i of p) {
		if (!graph[i].p.length) {
			rest.push(i);
		}
	}
	return { proj: proj.filter(x => !graph[i].p.length) };
};

const buildOrder = (proj, dep) => {
	const graph = proj.reduce((acc, x) => {
		acc[x] = {
			p: [],
			c: []
		};
		return acc;
	}, {});

	for (let d of dep) {
		graph[d[0]].c.push(d[1]);
		graph[d[1]].p.push(d[0]);
	}

	const result = [];
	let queue = proj.filter(x => !graph[x].p.length);

	while (proj.length > 0) {
		const item = queue.shift();

		for (let c of graph[item].c) {
			graph[c].p = graph[c].p.filter(x => x !== item);
			if (!graph[c].p.length) queue.push(c);
		}

		proj = proj.filter(x => x !== item);
		result.push(item);
	}

	return result;
};

module.exports = { buildOrder };
