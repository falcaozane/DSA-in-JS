// Question 1: Sum of all natural numbers from 1 to n

function sumOfNaturalNumber(n){
    let sum =0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }

    return sum;
}

/*

Math formula based
function sumOfNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
}

// Using recursion
function sumOfNaturalNumbersRecursive(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sumOfNaturalNumbersRecursive(n - 1);
    }
}

// Using the reduce method of arrays
function sumOfNaturalNumbersReduce(n) {
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    return numbers.reduce((sum, num) => sum + num, 0);
}
    
*/


console.log(sumOfNaturalNumber(5)); // 15
console.log(sumOfNaturalNumber(10)); // 55
console.log(sumOfNaturalNumber(8)); // 36
