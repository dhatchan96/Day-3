/* Do the below programs in anonymous function & IIFE
Sum of all numbers in an array */

// Anonymous function

const arr_c = [3,4,5,6,3,6,1,8,9,0];

const sum = function (arr) {
    let sum = 0;
    for(i of arr) {
        sum += i;
    }
    return sum;
}

console.log(sum(arr_c));

console.log('********************************');

// IIFE

(function (arr) {
    let sum = 0;
    for(i of arr) {
        sum += i;
    }
    console.log(sum);
})(arr_c);