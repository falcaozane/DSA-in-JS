/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let rightSum;
    for (let i = 0; i < nums.length; i++) {
        rightSum = total - nums[i] - leftSum;
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
