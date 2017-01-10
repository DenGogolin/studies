var quickFind = require('./quick-find'),
    lazyApproach = require('./quick-union'),
    quickUnionWeighted = require('./quick-union-weighted');

function getSolution(option) {
    const result = {
        ids: [],
        initialize: (intN) => {
            var i,
                temp = [];
            for (i = 0; i < intN; i += 1) {
                temp[i] = i;
            }
            this.ids = temp;
            typeof option.initCallback === 'function' && option.initCallback(intN);
            return this.ids;
        },
        isConnected: (a, b) => {
            return option.isConnected(this.ids, a, b);
        },
        connectItems: (a, b) => {
            this.ids = option.connectItems(this.ids, a, b);
            return this.ids;
        }
    };
    return result;
}

module.exports = {
    quickFind: getSolution(quickFind),
    lazyApproach: getSolution(lazyApproach),
    weighted: getSolution(quickUnionWeighted)
}