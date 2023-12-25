/*
var fib = function(x){
    const arr = [0,1]
    if(x == 0) return 0
    else if(x==1) return 1
    else{
        for (let i = 2; i <=x; i++) {
            arr.push(arr[i-1]+arr[i-2])
        }
    }

    console.log(arr)
}
*/

const fib = function (n){

    if (n<=1) return n;

    return fib(n-1)+fib(n-2);

}

//fib(6);

console.log(fib(6))