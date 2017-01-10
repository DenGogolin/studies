module.exports = {
  isConnected(arr, a, b) {
    return arr[a] === arr[b];
  },

  connectItems(arr, a, b) {
    var tempA = arr[a],
      tempB = arr[b];
    return arr.map(function (item, index) {
      if (item === tempA) {
        return tempB;
      }
      return item;
    });
  }

};
