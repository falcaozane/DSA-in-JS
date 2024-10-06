// link : https://leetcode.com/problems/trapping-rain-water/description/
/*
var trap = function(height) {
    let n = height.length;
    let leftMax = []
    let rightMax = []
    leftMax[0] = 0
    for(let i=1;i<n;i++){
        leftMax[i] = Math.max(leftMax[i-1],height[i-1]);
    }
    rightMax[n-1] = 0
    for(let i=n-2;i>=0;i--){
        rightMax[i] = Math.max(rightMax[i+1],height[i+1]);
    }

    let water = 0
    let minHeight = 0
    for(let i=0;i<n;i++){
        minHeight = Math.min(leftMax[i],rightMax[i]);
        if(minHeight - height[i]>=0){
            water += minHeight - height[i];
        }
    }

    return water
};
*/

// two pointer
var trap = function(height) {
    let n = height.length;
    if (n <= 2) return 0; // No trapping water possible with less than 3 heights

    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // Process from the left
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            // Process from the right
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }

    return water;
};

let heights = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(heights));
