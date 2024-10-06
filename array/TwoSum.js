/*
 brute force : o(n^2)

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
*/

// optimal using map : O(n)
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i],i)
    }

    return map;
};


let nums = [2,7,11,15]
let target = 18

var ans = twoSum(nums,target);
console.log(ans);