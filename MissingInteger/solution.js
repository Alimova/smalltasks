function solution(A) {
        var max = 0;
        var array = [];
        for (var i = 0; i < A.length; i++) {
            if (A[i] > 0) {
                if (A[i] > max) {
                    max = A[i];
                }
                array[A[i]] = 0;
            }
        }
        if (max < 1) {
            return 1;
        }
        for (var j = 1; j < max; j++) {
            if (typeof array[j] === 'undefined') {
                return j
            }
        }
        return max + 1;
}
