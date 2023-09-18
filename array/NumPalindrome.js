var isPalindrome = function(x) {
    let y = x.toString()
    y = y.split('').reverse().join('')
    console.log(y);
    if(x==y){
        return true;
    }
    return false;
};


var x = isPalindrome(121);
console.log(x);