function countDigits(num){
    num = Math.abs(num)
    let count = 0;
    // do{
    //     count++;
    //     num = Math.floor(num/10);
    // }while(num>0)
    while(num>0){
        count++;
        num = Math.floor(num/10);
    }
    return count;
}

/*
// Using recursion
function countDigitsRecursive(num) {
    if (num === 0) {
        return 0;
    } else {
        return 1 + countDigitsRecursive(Math.floor(Math.abs(num) / 10));
    }
}

// Using the logarithm function
function countDigitsLogarithm(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Using the length property of the string representation of the number
function countDigitsLength(num) {
    return String(Math.abs(num)).length;
}


*/

console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10