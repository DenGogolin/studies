Array.prototype.intersect || (Array.prototype.intersect = function intersect(arr) {
  var _this = this,
    result = [],
    temp;
  if (_this.length < arr.length) {
    temp = _this;
    _this = arr;
    arr = temp;
  }
  temp = Object.create(null);
  for (var i = 0; i < arr.length; i++) {
    temp[arr[i]] || (temp[arr[i]] = true, console.log(temp));
  }
  for (var j = 0; j < _this.length; j++) {
    temp[_this[j]] && (result.push(_this[j]), temp[_this[j]] = false, console.log(temp));
  }
  return result.sort();
});

console.info([1, 9, 9, 9, 2, 2, 3, 9, 9, 9, 5, 7].intersect([2, 2, 4, 3, 9, 8, 3, 4, 3]));