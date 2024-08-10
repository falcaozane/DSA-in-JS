// Question 2: Sum of digits of a number

function sumOfDigits(num){
    let sum=0;
    while(num>0){
        sum = sum + num%10;
        num = Math.floor(num/10);
    }

    return sum;
}
/*

// Using a for loop and the modulo operator

function sumOfDigitsForLoop(num) {
    let sum = 0;
    const numStr = String(num); // typecasting
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]); // typecasting 
    }
    return sum;
}

// Using recursion
function sumOfDigitsRecursive(num) {
    if (num === 0) {
        return 0;
    } else {
        return (num % 10) + sumOfDigitsRecursive(Math.floor(num / 10));
    }
}

*/

console.log(sumOfDigits(1287)); // 18