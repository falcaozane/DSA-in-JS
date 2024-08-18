// function zane(){
//     return alroy();
// }

// function alroy(){
//     return jonny();
// }

// function jonny(){
//     return true;
// }



// console.log(zane());


// function recursive(){
//     console.log("called");
//     recursive();
// }

// recursive();

// function recursive(person){
//     if(person==5) return true
//     console.log("kiti loka: ",person);
//     recursive(person+1);
// }

// recursive(1);

// function mul(arr){
//     let prod = 1;
//     for(let i=0;i<arr.length;i++){
//         prod *=arr[i];
//     }

//     return prod;
// }

// function mul(arr){
//     console.log(arr)
//     if(arr.length<=0) return 1;
//     console.log(arr.length-1)
//     return arr[arr.length-1]*mul(arr.slice(0,arr.length-1));
// }
// /*
//     [ 1, 2, 3, 4, 5 ]
//     [ 1, 2, 3, 4 ]
//     [ 1, 2, 3 ]
//     [ 1, 2 ]
//     [ 1 ]
//     []
//     120
// */


// console.log(mul([1,2,3,4,5]))


// function fib(n) {
//     if(n<=1) return n
//     else return fib(n-1)+fib(n-2);
// }


// console.log(fib(6));


// reverse a string

// function reverse(str){
//     if(str === "") return "";
//     return reverse(str.substr(1)) + str.charAt(0)
// }

// // working
// // reverse("hello") => reverse("ello") + h      1) olleh
// // reverse("ello") => reverse("llo") + e        2) olle
// // reverse("llo") => reverse("lo") + l          3) oll
// // reverse("lo") => reverse("o") + l            4) ol
// // reverse("o") => o                            5) o will be given back to 




// console.log(reverse("hello"))


