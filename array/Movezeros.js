// link : https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0
    let n = nums.length

    for(let j=0;j<n;j++){
        if(nums[j]!=0){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++
        }
    }
};