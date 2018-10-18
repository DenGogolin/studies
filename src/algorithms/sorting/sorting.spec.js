const mergeSort = require('./merge-sort'),
	qSort = require('./quick-sort'),
    { expect } = require('chai');

describe('Algorithms', () => {
    describe('Sorting', () => {        
		let __sortedCharArray = ['a', 'b', 'd', 'e', 'g', 'l', 'm', 'n', 'q', 'r', 's', 's', 't', 'u', 'v', 'x'];
		let unsortedCharArray = ['n', 'a', 'q', 'r', 's', 'u', 'g', 's', 'd', 'v', 'x', 'l', 'm', 'b', 't', 'e'];
        it('Merge sort', () => {
			expect(mergeSort(unsortedCharArray.map(x => x))).to.deep.equal(
				__sortedCharArray
			);
		});
		it('Quick sort', () => {
			expect(qSort(unsortedCharArray.map(x => x))).to.deep.equal(
				__sortedCharArray
			);
        });
    });
});