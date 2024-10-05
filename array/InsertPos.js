
function insertPos(arr,target) {
    let l = 0;
    let r = arr.length -1;
    let index = r+1;
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid] == target){
            index = mid
            break;
        }
        else if(arr[mid]<target){
            l = mid+1
        }
        else{
            index = mid;
            r = mid-1;
        }
    }

    return index
}

let arr = [1,4,6,8,10,14,16,18]

let target = 20

let pos = insertPos(arr,target);

console.log("Index position is : ",pos);


/*

Link: https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    let l=0;
    let r = nums.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid] < target){
            l = mid +1;
        }
        else if(nums[mid]>target){
            r = mid-1;
        }
        else{
            return mid;
        }
    }

    return l;
};

*/