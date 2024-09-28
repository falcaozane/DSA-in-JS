// adjacent swapping and largest element is sorted in first iteration
function merge(arr,low,mid,high){
    let temp = [];
    let left = low
    let right = mid+1

    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left])
            left++;
        }
        else{
            temp.push(arr[right])
            right++;
        }
    }

    while(left<=mid){
        temp.push(arr[left])
        left++;
    }

    while (right<=high) {
        temp.push(arr[right])
        right++;
    }

    // transfering all elements from temporary to arr //
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }

}
function Sort(arr,low,high){
    if(low>=high) return 
    let mid = Math.floor((low+high)/2);

    Sort(arr,low,mid)
    Sort(arr,mid+1,high)
    merge(arr,low,mid,high)
}


let arr = [5,4,3,2,1]

Sort(arr,0,arr.length-1)

console.log(arr);