/*
My solution
var getConcatenation = function(nums) {
    let n = nums.length
    let ans = [];
    for(let i=0;i<n;i++){
        ans.push(nums[i]);
    }
    for(let i=0;i<n;i++){
        ans.push(nums[i]);
    }

    return ans
};

var getConcatenation = function(nums) {
    return [...nums,...nums];
}
*/

var getConcatenation = function(nums) {
    nums.push(...nums);
    return nums;
}


let nums = [1,2,1]
console.log(getConcatenation(nums));