function root(arr, i) {
  if (arr[i] === i) {
    return i;
  }
  return root(arr, arr[i]);
}
module.exports = {
  isConnected(arr, a, b) {
    return root(arr, a) === root(arr, b);
  },

  connectItems(arr, a, b) {
    var i = root(arr, a),
        j = root(arr, b);
    arr[i] = j;
    return arr.map(x => x);
  }
};
