// link : https://www.naukri.com/code360/problems/beautiful-string_1115625?interviewProblemRedirection=true&company%5B%5D=Bank%20Of%20America&difficulty%5B%5D=Easy&leftPanelTabValue=PROBLEM
function makeBeautiful(str) {
    let n = str.length;
    let t1 = 0, t2 = 0;

    for (let i = 0; i < n; i++) {
        if (str[i] !== (i % 2 === 0 ? '0' : '1')) {
            t1++;
        }
        if (str[i] !== (i % 2 === 0 ? '1' : '0')) {
            t2++;
        }
    }

    return Math.min(t1, t2);
}

let str = "0000"
console.log(makeBeautiful(str));