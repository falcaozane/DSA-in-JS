// link : https://leetcode.com/problems/valid-palindrome
var isPalindrome = function(s) {
    
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    let reversed = s.split("").reverse().join('');
    
    // Compare the original string with the reversed string
    return s === reversed;

};