/*
Tokyo Kyoto consist of the same parts "to" and "kyo". 
Write a function that takes a word and a list of words and  returns the array of words for which the described rule can be applied. 

*/

module.exports = function getPairTo(wl, word) {
	const hash = {};
	const r = [];
	for (let i = 1; i < word.length - 1; i++) {
		word = `${word.substr(1)}${word.substr(0,1)}`;
		hash[word] = true;
    }

	for (let w of wl) {
		if (hash[w]) {
            hash[w] = false;
            r.push(w);
		}
	}
	return r;
};
