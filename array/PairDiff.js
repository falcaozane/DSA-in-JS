

/*

brute force approach : O(n^2)

var pairDiff = function(nums, target) {
    var num = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])===target){
            num[0] = i
            num[1] = j
        }
        }
    }
    return num
};

*/

// optimal two pointer : O(n)

var pairDiff = function(nums, target) {
    let left = 0;
    let right = 1;
    let n = nums.length;

    while (right < n) {
        let diff = nums[right] - nums[left];

        // If the difference is equal to target, return the indices
        if (diff === target) {
            return [left, right];
        }

        // If the difference is smaller than the target, increase right pointer
        if (diff < target) {
            right++;
        } else {
            // If the difference is greater than the target, increase left pointer
            left++;
            // To make sure left doesn't overlap with right, we also adjust right
            if (left === right) {
                right++;
            }
        }
    }

    return null; // Return null if no pair is found
};


let nums = [2,3,5,10,50,80]

let diff = 45;

var ans = pairDiff(nums,diff);
console.log(ans);