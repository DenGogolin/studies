const mergeSort = require('./merge-sort'),
    { expect } = require('chai');

describe('Algorithms', () => {
    describe('Sorting', () => {
        var unsortedCharArray = ['n', 'a', 'q', 'r', 's', 'u', 'g', 's', 'd', 'v', 'x', 'l', 'm', 'b', 't', 'e'];
        var __sortedCharArray = ['a', 'b', 'd', 'e', 'g', 'l', 'm', 'n', 'q', 'r', 's', 's', 't', 'u', 'v', 'x'];
        it('Merge sort', () => {
            expect(mergeSort(unsortedCharArray)).to.deep.equal(__sortedCharArray);
        });
    });
});