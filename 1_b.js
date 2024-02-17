/* Do the below programs in anonymous function & IIFE
Convert all the strings to title caps in a string array */

// Anonymous function

const arr_b = ['dhatchan', 'sam', 'wOrLd', 'temPerature'];

let res = [];

const titleCaps = function (arr) {
    for(i of arr) {
        res.push(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
    }
}

titleCaps(arr_b);

console.log(res);

console.log('********************************');
// IIFE
(function (arr) {
    let res = [];
    for(i of arr) {
        res.push(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
    }
    console.log(res);
})(arr_b);