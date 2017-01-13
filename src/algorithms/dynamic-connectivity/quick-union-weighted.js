var base = require('./quick-find').DynamicConnectivity,
  root = require('./quick-union').root;

function weight(arr, a, b) {
  arr[a] = arr[a] + arr[b];
  arr.slice();
};

const QuickUnionWeighted = Object.create(base);

QuickUnionWeighted.init = function (intN) {
  this.populize(intN);
  this.sizes = this.ids.map(x => 1);
};

QuickUnionWeighted.isConnected = function (a, b) {
  return root(this.ids, a) === root(this.ids, b);
};

QuickUnionWeighted.connectItems = function (a, b) {
  var i = root(this.ids, a),
    j = root(this.ids, b);
  if (i === j) return;
  if (this.sizes[i] > this.sizes[j]) {
    this.ids[j] = i;
    weight(this.sizes, i, j);
  } else {
    this.ids[i] = j;
    weight(this.sizes, j, i);
  }
  this.ids = this.ids.slice();
};

module.exports = QuickUnionWeighted;