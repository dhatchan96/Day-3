/* Do the below programs in anonymous function & IIFE
Rotate an array by k times */

// Anonymous function

let arr_h = [1,2,3,4,5,6,7,8,9];

let rotatedArr;

const rotate = function (arr, k) {
    rotatedArr = arr.concat(arr.splice(0, k));
};

rotate(arr_h, 3);

console.log(rotatedArr);

console.log('********************************');
arr_h = [1,2,3,4,5,6,7,8];
// IIFE

(function (arr, k) {
    rotatedArr = arr.concat(arr.splice(0, k));
})(arr_h, 3);

console.log(rotatedArr);

