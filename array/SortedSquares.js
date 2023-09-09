/*
var sortedSquares = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i]*nums[i]
    }
    let newnums = nums.sort(function(a,b){ return a-b});
    
    return newnums
};
*/
var sortedSquares = function(nums) {
    return nums.map(num => num * num).sort((a, b) => a - b);
};

let nums=[-4,-1,0,3,10]
nums.sort(function(a,b){ return a-b})

console.log(nums)
console.log(sortedSquares(nums));