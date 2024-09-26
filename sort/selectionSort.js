// get minimum and swap
function Sort(arr){
    let n = arr.length

    for(let i=0;i<n-1;i++){
        let mini = arr[i];
        for(let j=i;j<n;j++){
            if(arr[j]<mini){
                [arr[i],arr[j]] = [arr[j],arr[i]] // swapping in JS
            }
        }
    }
    
    return arr
}


let arr = [5,4,3,2,1]

Sort(arr)

console.log(arr);