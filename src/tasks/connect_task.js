/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.
Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].

All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.

*/

module.exports = function reconstruct(tickets, startFrom) {
    const routes = [];
    function _reconstruct(from, used) {
        const dest = getOptions(from, used);
        if (dest.length > 0) {
            for (let d of dest) {
                _reconstruct(tickets[d][1], [...used, d]);
            }
        } else {
            routes.push(used);
        }
    }

    function getOptions(from, used) {
        const result = [];
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] === from && !used.includes(i)) {
                result.push(i);
            }
        }
        return result;
    }

    _reconstruct(startFrom, []);
    const route = routes.reduce((prev, cur) => {
        if (cur.length > prev.length) {
            return cur;
        } else {
            return prev;
        }
    }, []);
    return [...route.map(x => tickets[x][0]), tickets[route[route.length - 1]][1]];
}
