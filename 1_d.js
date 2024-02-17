/* Do the below programs in anonymous function & IIFE
Return all the prime numbers in an array */

// Anonymous function

const arr_d = [3,4,5,6,3,6,1,8,9];

const primes = function (arr) {
    for(i of arr) {
        if(i > 1) {
            for(j = 2; j <= Math.sqrt(i); j++) {
                if(i % j === 0) {
                    break;
                }
            }
            if(j > Math.sqrt(i)) {
                console.log(i);
            }
        }
}};

primes(arr_d);

console.log('********************************');

// IIFE

(function (arr) {
    for(i of arr) {
        if(i > 1) {
            for(j = 2; j <= Math.sqrt(i); j++) {
                if(i % j === 0) {
                    break;
                }
            }
            if(j > Math.sqrt(i)) {
                console.log(i);
            }
        }
    }
})(arr_d);