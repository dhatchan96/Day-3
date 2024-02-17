/* Do the below programs in anonymous function & IIFE
Return median of two sorted arrays of the same size.
 */

// Anonymous function

const arr_f_1= ['2', '3', '4', '5', '6'];
const arr_f_2= ['2', '3', '4', '9', '10'];

let combinedArr, length, res_f;

const median = function (arr_1, arr_2) {
    combinedArr = arr_1.concat(arr_2).sort((a,b) => a-b);
    length = combinedArr.length;
    if(length % 2 === 0) {
        res_f = (combinedArr[length / 2 - 1] + combinedArr[length / 2]) / 2;
    } else {
        res_f = combinedArr[Math.floor(length / 2)];
    }};

    median(arr_f_1, arr_f_2);
    console.log(res_f);
    
    console.log('********************************');

    res_f = '';
    // IIFE

    (function (arr_1, arr_2) {
        combinedArr = arr_1.concat(arr_2).sort((a,b) => a-b);
        length = combinedArr.length;
        if(length % 2 === 0) {
            res_f = (combinedArr[length / 2 - 1] + combinedArr[length / 2]) / 2;
        } else {
            res_f = combinedArr[Math.floor(length / 2)];
        }
    })(arr_f_1, arr_f_2);

    console.log(res_f);


