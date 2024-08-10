function isPal(x){
    let result=0; 
    let n = x; // save og number

    while(n>0){
        let digit = n%10;
        result = result*10+digit;
        n = Math.floor(n/10);
    }

    return x === result; 
}

console.log(isPal(-121));
console.log(isPal(121));
