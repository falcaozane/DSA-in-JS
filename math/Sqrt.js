/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // binary serach approach
    if (x <= 1) return x;
    let left = 0
    let right = x;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if (mid*mid < x){
            left = mid+1
        }
        else if (mid * mid >x){
            right = mid - 1;
        }
        else{
            return mid
        }
    }

    return right;
};