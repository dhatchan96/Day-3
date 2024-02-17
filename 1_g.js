/* Do the below programs in anonymous function & IIFE
Remove duplicates from an array*/

// Anonymous function

const arr_g = [1,2,3,2,1,2,3,3,4,5,5,8,9];

let uniqueArr;

const unique = function (arr) {
    uniqueArr = [...new Set(arr)];
};

unique(arr_g);

console.log(uniqueArr);

console.log('********************************');


// IIFE

(function (arr) {
    uniqueArr = [...new Set(arr)];
})(arr_g);

console.log(uniqueArr);