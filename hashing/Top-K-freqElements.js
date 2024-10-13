// link : https://leetcode.com/problems/top-k-frequent-elements/


var topKFrequent = function(arr, k) {
    let map = new Map();

    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let sortedArray = Array.from(map).sort((a, b) => b[1] - a[1]);

    let ans = [];

    for(let i=0; i<k; i++){
        ans.push(sortedArray[i][0]);
    }

    return ans;
};

let nums = [1,1,1,2,2,3];
let k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, 2]
