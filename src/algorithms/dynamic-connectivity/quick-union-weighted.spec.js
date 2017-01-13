var QuickUnion = require('./quick-union-weighted'),
  { expect } = require('chai');

describe('Algorithms', () => {
  describe('Dynamic connectivity', () => {
    describe('quick union weighted', () => {
      var newObj = Object.create(QuickUnion);
      it('Initialization', () => {
        newObj.init(10);
        expect(newObj.ids).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(newObj.sizes).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
      });
      it('Connecting', () => {
        newObj.connectItems(0, 9);
        expect(newObj.ids).to.deep.equal([9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(newObj.sizes).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]);
        newObj.connectItems(1, 8);
        expect(newObj.ids).to.deep.equal([9, 8, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(newObj.sizes).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 2, 2]);
        newObj.connectItems(2, 7);
        expect(newObj.ids).to.deep.equal([9, 8, 7, 3, 4, 5, 6, 7, 8, 9]);
        expect(newObj.sizes).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 2, 2, 2]);
        newObj.connectItems(0, 8);
        expect(newObj.ids).to.deep.equal([9, 8, 7, 3, 4, 5, 6, 7, 8, 8]);
        expect(newObj.sizes).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 2, 4, 2]);
        newObj.connectItems(8, 7);
        expect(newObj.ids).to.deep.equal([9, 8, 7, 3, 4, 5, 6, 8, 8, 8]);
        expect(newObj.sizes).to.deep.equal([1, 1, 1, 1, 1, 1, 1, 2, 6, 2]);
      });
      it('Connection check', () => {
        expect(newObj.isConnected(0, 9)).to.equal(true);
        expect(newObj.isConnected(5, 6)).to.equal(false);
      });
    });
  });
});

