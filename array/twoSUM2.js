// link : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/1356792952/

var twoSum = function(numbers, target) {
    let n = numbers.length
    let l=0
    let r = n-1
    while(l<r){
        let sum = numbers[l]+numbers[r];
        if(sum === target){
            return [l+1,r+1]
        }
        else if (sum < target){
            l++;
        }
        else{
            r--;
        }
    }

};