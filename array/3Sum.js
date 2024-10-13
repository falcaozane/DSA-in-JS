// link : https://leetcode.com/problems/3sum/

// brute force : O(n^3)

/*
 three for loop 

var threeSum = function(nums) {
    let n = nums.length;
    let target  = 0;
    let ans = [];

    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                if(nums[i]+nums[j]+nums[k] === target){
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    if(!ans.some(t => t[0] === triplet[0] && t[1] === triplet[1] && t[2] === triplet[2])) {
                        ans.push(triplet);
                    }
                }
            }
        }
    }

    return ans;
};

*/

// O(n^2) : optimal
var threeSum = function(nums) {
    let n = nums.length;
    let ans = [];
    
    // Sort the array to facilitate the two-pointer approach
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < n - 2; i++) {
        // Skip the duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for `left` and `right`
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;  // Move left pointer to the right to increase the sum
            } else {
                right--; // Move right pointer to the left to decrease the sum
            }
        }
    }
    
    return ans;
};