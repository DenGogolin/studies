function sort(arr) {
    function merge(arr, aux, lo, hi, mid) {        
        for (var e = lo; e<=hi; e++){
            aux[e] = arr[e];
        }
        var i = lo, j = mid + 1;
        for (var k = lo; k <= hi; k++) {
            if (i > mid) {
                arr[k] = aux[j++];
            } else if (j > hi) {
                arr[k] = aux[i++];
            } 
            else if (aux[i] > aux[j]) {
                arr[k] = aux[j++];
            }
             else {
                arr[k] = aux[i++];
            }
        }

    }
    // function merge(left, right) {
    //     var result = [],
    //         il = 0,
    //         ir = 0;

    //     while (il < left.length && ir < right.length) {
    //         if (left[il] < right[ir]) {
    //             result.push(left[il++]);
    //         } else {
    //             result.push(right[ir++]);
    //         }
    //     }

    //     return result.concat(left.slice(il)).concat(right.slice(ir));
    // }

    function sort(arr, aux, lo, hi) {
        if (hi <= lo) {
            return;
        }
        var mid = lo + Math.floor((hi - lo) / 2);
        sort(arr, aux, lo, mid);
        sort(arr, aux, mid + 1, hi);
        merge(arr, aux, lo, hi, mid);
    }
    sort(arr, arr.slice(), 0, arr.length - 1);
    return arr;
}
module.exports = sort;