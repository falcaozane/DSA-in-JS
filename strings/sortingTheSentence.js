// link : https://leetcode.com/problems/sorting-the-sentence/

var sortSentence = function(s) {
        let m = new Map();
        let k = 0;
        let num = 0;
        let p = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] >= '1' && s[i] <= '9') {
                num = parseInt(s[i]);
                p = i;
                m.set(num, s.substring(k, p));
                k = i + 2;
            }
        }
        let r = "";
        for (let j = 1; j <= m.size; j++) {
            r += m.get(j);
            if (j < m.size) {
                r += " ";
            }
        }
        return r;
};

let str = "is2 sentence4 This1 a3"

console.log(sortSentence(str));