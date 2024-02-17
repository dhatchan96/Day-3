// Arrow functions

//a) Print odd numbers in an array

const arr_i = [1,2,3,4,5,6,7,8,9];

const printOdd = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2!== 0) {
            console.log(arr[i]);
        }
    }
};

printOdd(arr_i);

console.log('********************************');

//b) Convert all the strings to title caps in a string array

const arr_b = ['dhatchan', 'sam', 'wOrLd', 'temPerature'];

let res = [];

const titleCaps = (arr) => {
    for(i of arr) {
        res.push(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());
    }
}

titleCaps(arr_b);

console.log(res);

console.log('********************************');

//c) Sum of all numbers in an array

const arr_c = [1,2,3,4,5,6,7,8,9];

const sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(sum(arr_c));

console.log('********************************');

//d) Return all the prime numbers in an array

const arr_d = [1,2,3,4,5,6,7,8,9];

const primes = (arr) => {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                break;
            } else {
                primes.push(arr[i]);
            }
        }
    }
    return primes;
};

console.log(primes(arr_d));

console.log('********************************');

//e) Return all the palindromes in an array

const pal_arr = ['killer', 'level', '1234455', '123321'];
let temp;
let res_e = [];

const palindromes = (arr) => {
    for( i of arr) {
        temp = i.split('').reverse().join('');
        if(i === temp) {
            res_e.push(i);
        }
    }};

    palindromes(pal_arr);
    console.log(res_e);
