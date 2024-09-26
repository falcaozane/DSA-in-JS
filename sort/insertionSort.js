// Takes an element & places it in its correct order

function Sort(arr){
    let n = arr.length

    for(let i=0;i<n;i++){
        let j=i
        while(j>0 && arr[j-1]>arr[j]){
            [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
            j--
        }
    }
    
    
    return arr
}


let arr = [5,4,3,2,1]

Sort(arr)

console.log(arr);