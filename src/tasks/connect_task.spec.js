const reconstruct = require('./connect_task'),
    { expect } = require('chai');

describe('Tasks', () => {
    it('Flight tickets connectivity', () => {
        const startPoint = "JFK",
            ticketSets = [
                [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]],
                [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]],
                [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"], ["MUC", "SFO"], ["SFO", "LHR"]], // corrupted input 
                [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "MUC"], ["LHR", "SFO"], ["MUC", "SFO"], ["SFO", "LHR"]],
            ];
        results = [
            ["JFK", "MUC", "LHR", "SFO", "SJC"],
            ["JFK", "SFO", "ATL", "JFK", "ATL", "SFO"],
            ['JFK', 'MUC', 'SFO', 'LHR', 'SFO', 'SJC'],
            ['JFK', 'MUC', 'LHR', 'SFO', 'MUC', 'SFO', 'LHR'],
        ];
        for (let i = 0; i < ticketSets.length; i++) {
            expect(reconstruct(ticketSets[i], startPoint)).to.deep.equal(results[i]);
        }
    });
});