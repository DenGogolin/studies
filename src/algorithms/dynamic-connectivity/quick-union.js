var base = require('./quick-find').DynamicConnectivity

function root(arr, i) {
  if (arr[i] === i) {
    return i;
  }
  return root(arr, arr[i]);
}

function flatteningRoot(arr, i) {
  if (arr[i] === i) {
    return i;
  }
  arr[i] = flatteningRoot(arr, arr[i]);
  return arr[i];
}

const QuickUnion = Object.create(base);

QuickUnion.init = function (intN) {
  this.populize(intN);
};

QuickUnion.isConnected = function (a, b) {
  return root(this.ids, a) === root(this.ids, b);
};

QuickUnion.connectItems = function (a, b) {
  var i = root(this.ids, a),
    j = root(this.ids, b);
  this.ids[i] = j;
  this.ids = this.ids.slice();
};

module.exports = {
  QuickUnion: QuickUnion,
  root: root,
  flatteningRoot: flatteningRoot
};
