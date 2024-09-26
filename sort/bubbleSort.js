// adjacent swapping and largest element is sorted in first iteration
function Sort(arr){
    let n = arr.length -1

    for(let i=n;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    
    return arr
}


let arr = [5,4,3,2,1]

Sort(arr)

console.log(arr);