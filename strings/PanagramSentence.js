// link: https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function(sentence) {
    let alpha = new Array(26).fill(false);
    let n = sentence.length;

    for(let i=0; i<n; i++){
        alpha[sentence.charCodeAt(i) - 'a'.charCodeAt(0)] = true;
    }

    for(let i=0; i<26; i++){
        if(!alpha[i]){
            return false;
        }
    }

    return true;
};