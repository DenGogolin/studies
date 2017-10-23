function lookFor(arr, key, lo, hi) {
    var mid;
    if (lo <= hi) {
        mid = lo + (hi - lo) / 2;
    }
    return;
}

module.exports = function (arr, key) {
    var lo = 0, hi = arr.length - 1;
    return lookFor(arr, key, lo, hi);
};