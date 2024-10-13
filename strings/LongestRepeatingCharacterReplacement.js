// link : https://leetcode.com/problems/longest-repeating-character-replacement/


// sliding window

var characterReplacement = function(s, k) {
    let count = new Array(26).fill(0);
    let maxCount = 0;
    let i = 0;
    let result = 0;
    let j = 0;

    while(j < s.length){
        count[s.charCodeAt(j) - 'A'.charCodeAt(0)]++;
        maxCount = Math.max(maxCount, count[s.charCodeAt(j) - 'A'.charCodeAt(0)]); // 65 - 65
        while(j - i + 1 - maxCount > k){
            count[s.charCodeAt(i) - 'A'.charCodeAt(0)]--;
            i++;
        }
        result = Math.max(result, j - i + 1);
        j++;
    }

    return result;
};