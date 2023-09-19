
var shuffle = function(nums, n) {
    let res = [];
    let count = nums.length/2;
    for(let i=0;i<nums.length/2;i++){
        res.push(nums[i]);
        res.push(nums[count])
        count++;
    }
    return res;
};


let nums = [2,5,1,3,4,7]

let n = 6;

console.log(shuffle(nums,n));