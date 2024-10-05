// JavaScript Program for Maximum Subarray Sum using Kadane's Algorithm

// Function to find the maximum subarray sum
function maxSubarraySum(arr) {
    let res = arr[0];
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        
        // Find the maximum sum ending at index i by either extending 
        // the maximum sum subarray ending at index i - 1 or by
        // starting a new subarray from index i
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        
        // Update res if maximum subarray sum ending at index i > res
        res = Math.max(res, maxEnding);
    }
    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));

/*

naive approach : O(n^2)

// JavaScript Program to find the maximum subarray sum using nested loops 

// Function to find the sum of subarray with maximum sum
function maxSubarraySum(arr) {
    let res = arr[0];
  
    // Outer loop for starting point of subarray
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));


*/
