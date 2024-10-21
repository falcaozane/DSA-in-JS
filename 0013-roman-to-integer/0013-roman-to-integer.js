/**
 * @param {string} s
 * @return {number}
 */
 var num = function(c) {
    switch(c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        default: return 1000;
    }
}
var romanToInt = function(s) {
    let sum = 0, index = 0;

    while(index < s.length - 1) {
        if(num(s[index]) < num(s[index + 1])) {
            sum -= num(s[index]);
        } else {
            sum += num(s[index]);
        }
        index++;
    }

    sum += num(s[index]);

    return sum;
};