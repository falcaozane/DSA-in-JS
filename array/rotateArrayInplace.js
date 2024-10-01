// link : https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [];
    let n = nums.length
    for(let i=0;i<n;i++){
        temp[(i+k)%n] = nums[i]
    }

    for(let i=0; i<n; i++){
        nums[i] = temp[i]
    }
};

/*
var rotate = function(nums, k) {
    k = k % nums.length; // handle cases where k is greater than nums.length
    reverse(nums, 0, nums.length - 1); // reverse the entire array
    reverse(nums, 0, k - 1); // reverse the first k elements
    reverse(nums, k, nums.length - 1); // reverse the rest of the array
};

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};
*/