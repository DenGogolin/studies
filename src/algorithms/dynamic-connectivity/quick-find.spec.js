var quickFind = require('./quick-find').QuickFind,
  { expect } = require('chai');

describe('Algorithms', () => {
  describe('Dynamic connectivity', () => {
    describe('quick find', () => {
      var newObj = Object.create(quickFind);
      it('Initialization', () => {
        newObj.init(10);
        expect(newObj.ids).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
      it('Connecting', () => {
        newObj.connectItems(0, 9);
        expect(newObj.ids).to.deep.equal([9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        newObj.connectItems(1, 8);
        expect(newObj.ids).to.deep.equal([9, 8, 2, 3, 4, 5, 6, 7, 8, 9]);
        newObj.connectItems(2, 7);
        expect(newObj.ids).to.deep.equal([9, 8, 7, 3, 4, 5, 6, 7, 8, 9]);
        newObj.connectItems(0, 8);
        expect(newObj.ids).to.deep.equal([8, 8, 7, 3, 4, 5, 6, 7, 8, 8]);
        newObj.connectItems(1, 2);
        expect(newObj.ids).to.deep.equal([7, 7, 7, 3, 4, 5, 6, 7, 7, 7]);
      });
      it('Connection check', () => {
        expect(newObj.isConnected(0, 9)).to.equal(true);
        expect(newObj.isConnected(5, 6)).to.equal(false);
      });
    });
  });
});