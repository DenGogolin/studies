/*

Word Search In Matrix
Given a 2D matrix of letters, find if a given word exists in the matrix.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. .

For example,
Given board =
[
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.

*/

module.exports = function iSWordInMatrix(word, matrix) {
    const rmatrix = matrix.reduce((prev, cur) => prev.concat(cur), []),
        iLen = matrix.length,
        jLen = matrix[0].length,
        lSymb = word.length - 1;
    let route = [];


    function iSWordInMatrixRecursive(i, nb) {
        const occasions = getOccasions(word[i], nb);
        if (occasions.length > 0) {
            if (i < lSymb) {
                let result = false;
                for (let j of occasions) {
                    result = result || iSWordInMatrixRecursive(i + 1, getNeighbours(j));
                    if (!result) {
                        const ind = route.findIndex(x => x === j);
                        route = [...route.slice(0, ind - 1), ...route.slice(ind + 1, route.length - 1)];
                    }
                }
                return result;
            }
            return true;
        }
        return false;
    }

    function getNeighbours(num) {
        const i = Math.floor(num / jLen),
            j = num - i * jLen,
            result = [];
        route.push(num);
        if (j !== 0) {
            result.push(num - 1);
        }
        if (j !== jLen - 1) {
            result.push(num + 1);
        }
        if (i !== 0) {
            result.push(num - jLen);
        }
        if (i !== iLen - 1) {
            result.push(num + jLen);
        }

        return result;
    }

    function getOccasions(letter, nb) {
        const result = [];
        for (let i of nb) {
            if (rmatrix[i] === letter && !route.find(x => x === i)) {
                result.push(i);
            }
        }
        return result;
    }
    function getFirst(arr, lettet) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === lettet) {
                result.push(i);
            }
        }
        return result;
    }

    return iSWordInMatrixRecursive(0, getFirst(rmatrix, word[0]));
}