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
};


let nums = [2,7,11,15]
let target = 18

var ans = twoSum(nums,target);
console.log(ans);