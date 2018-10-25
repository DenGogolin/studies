module.exports = function minimumSwaps(arr) {
    let count = 0 ;
    for (let i = 0; i < arr.length - 1 ; i++){
        if (arr[i] > i + 1) {
            swap(arr, i, Math.min(arr.length - 1, arr[i] - 1));
            count++;
            i--;
        }
    }

    return count;
}

function swap(arr, i, j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
}