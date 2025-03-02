/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let l = 0
    let r = arr.length

    while(l<=r){
        const mid = Math.floor((l+r)/2)

        let kthmissing = arr[mid]-(mid+1)

        if(kthmissing < k){
            l = mid+1
        }else{
            r = mid-1
        }
    }

    return l+k
};

/*

Input
arr = [2,3,4,7,11]
k = 5
Output : 9

*/
