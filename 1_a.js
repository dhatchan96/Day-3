/* Do the below programs in anonymous function & IIFE
Print odd numbers in an array */

// Anonymous function

let arr = [3,4,5,6,3,6,1,8,9,0];

const oddNumbers = function (arr) {
    for(i of arr) {
        if(i % 2!== 0) {
            console.log(i);
        }
    }
}

oddNumbers(arr);

console.log('********************************');

// IIFE

(function (arr) {
    for(i of arr) {
        if(i % 2!== 0) {
            console.log(i);
        }
    }
})(arr);
