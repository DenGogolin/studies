const iSWordInMatrix = require('./matrix_task'),
    { expect } = require('chai');

describe('Tasks', () => {
    it('Is word in matrix', () => {
        const matrix = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const results = {
            'ABCCED': true,
            'SEE': true,
            'ABCB': false,
            'ESCCES': false,
        }
        for (let i in results) {
            expect(iSWordInMatrix(i, matrix)).to.equal(results[i]);
        }
    });
});