/*
Tokyo Kyoto consist of the same parts "to" and "kyo". 
Write a function that takes a word and a list of words and  returns the array of words for which the described rule can be applied. 

*/

module.exports = function getPairTo(wl, word) {
	const hash = {};
	const r = [];
	let letters = word.split("");
	for (let i = 1; i < letters.length - 1; i++) {
		const spl = letters.splice(0, 1);
		letters = letters.concat(spl);
		hash[letters.join("")] = true;
	}

	for (let w of wl) {
		if (hash[w]) {
            r.push(w);
		}
	}
	return r;
};
