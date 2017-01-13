const DynamicConnectivity = {
  populize: function (intN) {
    this.ids = Array.apply(null, { length: intN }).map((v, i) => i);
  },
}

const QuickFind = Object.create(DynamicConnectivity);

QuickFind.init = function (intN) {
  this.populize(intN);
};

QuickFind.isConnected = function (a, b) {
  return this.ids[a] === this.ids[b];
};

QuickFind.connectItems = function (a, b) {
  var tempA = this.ids[a],
    tempB = this.ids[b];
  this.ids = this.ids.map(function (item, index) {
    if (item === tempA) {
      return tempB;
    }
    return item;
  });
};

module.exports = {
  QuickFind: QuickFind,
  DynamicConnectivity: DynamicConnectivity
};
