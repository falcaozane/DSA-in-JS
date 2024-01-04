/*
var removeElement = function(nums, val) {
    const result = nums.filter(num => num !== val);
    return result;
};

*/

var removeElement = function(nums, val) {
    
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
        nums[i] = nums[j];
        i++;
        }
    }
    return i;
};

// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;

const newLength = removeElement(nums, val);

console.log(nums.slice(0, newLength));  // Output: [2, 2]
