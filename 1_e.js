/* Do the below programs in anonymous function & IIFE
Return all the palindromes in an array */

// Anonymous function

const pal_arr = ['killer', 'level', '1234455', '123321'];
let temp;
let res_e = [];

const palindromes = function (arr) {
    for( i of arr) {
        temp = i.split('').reverse().join('');
        if(i === temp) {
            res_e.push(i);
        }
    }};

    palindromes(pal_arr);
    console.log(res_e);

    console.log('********************************');
    
    res_e = [];
    // IIFE

    (function (arr) {
        for( i of arr) {
            temp = i.split('').reverse().join('');
            if(i === temp) {
                res_e.push(i);
            }
        }
    })(pal_arr);

    console.log(res_e);