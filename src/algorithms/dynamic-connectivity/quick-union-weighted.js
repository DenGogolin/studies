function root(arr, i) {
  if (arr[i] === i) {
    return i;
  }
  arr[i] = root(arr, arr[i]); //TOTEST
  return arr[i];
}
var sizes = [];
module.exports = {
  initCallback(intN) {
    for (var i = 0; i < intN; i++) {
      sizes.push(0);
    }
  },
  isConnected(arr, a, b) {
    return root(arr, a) === root(arr, b);
  },

  connectItems(arr, a, b) {
    var i = root(arr, a),
      j = root(arr, b);
    if (i === j) return;
    if (sizes[i] > sizes[j]) {
      arr[j] = j; sizes[i] += sz[j];
    } else {
      arr[i] = j; sizes[j] += sz[i];
    }
    return arr.map(x => x);
  }
};
