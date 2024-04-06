/*
var isPalindrome = function(x) {
    let y = x.toString()
    y = y.split('').reverse().join('')
    console.log(y);
    if(x==y){
        return true;
    }
    return false;
};

*/

const isPalindrome = function (x) {
    return x <0 ? false: x === +x.toString().split("").reverse().join("");
};

var x = isPalindrome(121);
console.log(x);

