// link : https://leetcode.com/problems/longest-palindrome/description/

// using map
/*
var longestPalindrome = function(s) {
    let oddCount = 0;
        let map = new Map();
        for (let ch of s) {
            let count = map.get(ch) || 0;
            map.set(ch, count + 1);
            if ((count + 1) % 2 === 1) {
                oddCount++;
            } else {
                oddCount--;
            }
        }
        if (oddCount > 1) {
            return s.length - oddCount + 1;
        }
        return s.length;
};
*/


// using set
var longestPalindrome = function(s) {
    let oddCount = 0;
    let set = new Set();
    for (let ch of s) {
        if (!set.has(ch)) {
            set.add(ch);
            oddCount++;
        } else {
            set.delete(ch);
            oddCount--;
        }
    }
    if (oddCount > 1) {
        return s.length - oddCount + 1;
    }
    return s.length;
};

let str  = "abccccdd";

console.log(longestPalindrome(str));