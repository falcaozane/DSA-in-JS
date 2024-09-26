// function reverseArray(arr) {
//     let i=0
//     let n=arr.length
    

//     for(let i=0;i<n/2;i++){
//         let temp = arr[i]
//         arr[i] = arr[n-i-1]
//         arr[n-i-1] = temp
//     }

//     return arr;
// }

function reverseArray(arr,start,end){
    if(start>=end) return

    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    reverseArray(arr,start+1,end-1);
}

let arr = [1,2,3,4,5]
reverseArray(arr,0,arr.length-1);
console.log(arr);