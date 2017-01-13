var obj = require('./quick-union'),
  { expect } = require('chai');

describe('Algorithms', () => {
  describe('Dynamic connectivity', () => {
    describe('quick union', () => {
      var newObj = Object.create(obj.QuickUnion);
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
        expect(newObj.ids).to.deep.equal([9, 8, 7, 3, 4, 5, 6, 7, 8, 8]);
        newObj.connectItems(1, 2);
        expect(newObj.ids).to.deep.equal([9, 8, 7, 3, 4, 5, 6, 7, 7, 8]);
      });
      it('Connection check', () => {
        expect(newObj.isConnected(0, 9)).to.equal(true);
        expect(newObj.isConnected(5, 6)).to.equal(false);
      });
      var fake = [9, 1, 2, 5, 4, 6, 6, 7, 8, 3];
      it('Root operation', () => {
        expect(obj.root(fake, 0)).to.equal(6);
        expect(obj.root(fake, 6)).to.equal(6);
      });
      it('Flattening Root operation', () => {
        expect(obj.flatteningRoot(fake, 0)).to.equal(6);
        expect(fake).to.deep.equal([6, 1, 2, 6, 4, 6, 6, 7, 8, 6]);
        expect(obj.flatteningRoot(fake, 0)).to.equal(6);
        expect(fake).to.deep.equal(fake);
        expect(obj.flatteningRoot(fake, 6)).to.equal(6);
        expect(fake).to.deep.equal(fake);
      });
    });
  });
});

