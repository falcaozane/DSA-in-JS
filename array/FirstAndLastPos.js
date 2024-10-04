// Binary serach to find the first and last occurrence of target variable in an array

function FirstPos(arr,target) {
    let n = arr.length 
    let start = 0
    let end = n-1;
    let first = -1;
    let last = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]==target){
            first = mid;
            end = mid-1;
        }
        else if(arr[mid]<target){
            start = mid+1
        }
        else{
            end = mid-1
        }
    }

    return first
}

function LastPos(arr,target) {
    let n = arr.length 
    let start = 0
    let end = n-1;
    let last = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]==target){
            last = mid;
            start = mid+1;
        }
        else if(arr[mid]<target){
            start = mid+1
        }
        else{
            end = mid-1
        }
    }

    return last
}



let arr = [5,7,7,8,8,10]

let target = 8

console.log(FirstPos(arr,target))

console.log(LastPos(arr,target))

