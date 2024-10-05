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

/*
Leetcode : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function(nums, target) {
        if (!nums.length) return [-1, -1];
        let l = 0, r = nums.length - 1;
        // binary search
        while (l < r) {
            let mid = Math.floor(l + (r - l) / 2);
            if (nums[mid] >= target) r = mid;
            else l = mid + 1;
        }
        if (nums[l] !== target) return [-1, -1];
        let left = l; // first occurrence

        l = 0, r = nums.length - 1;
        while (l < r) {
            let mid = Math.floor(l + (r - l + 1) / 2);
            if (nums[mid] <= target) l = mid;
            else r = mid - 1;
        }
        return [left, r];
};
*/
