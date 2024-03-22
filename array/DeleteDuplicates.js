var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    nums.length = i + 1; // Update the length of the array to the new length
    return i + 1;
};

// Example usage:
const nums = [1, 1, 2, 3, 3];
const newLength = removeDuplicates(nums);

console.log(nums.slice(0, newLength));  // Output: [1, 2]
