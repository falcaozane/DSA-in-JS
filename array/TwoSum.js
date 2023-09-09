var twoSum = function(nums, target) {
    var num = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
            num[0] = i
            num[1] = j
        }
        }
    }
    return num
};


let nums = [2,7,11,15]
let target = 18

var ans = twoSum(nums,target);
console.log(ans);