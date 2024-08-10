/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = Array.from(String(x), Number)

    // Two pointer approach
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false
        }
    }

    return true
    
};