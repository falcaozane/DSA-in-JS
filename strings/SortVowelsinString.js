// link : https://leetcode.com/problems/sort-vowels-in-a-string/


var sortVowels = function(s) {
    let lower = new Array(26).fill(0);
    let upper = new Array(26).fill(0);
    let ans = "";

    // Step 1: Count and mark vowels
    let arr = s.split("");  // Convert string to array for easier manipulation

    for (let i = 0; i < arr.length; i++) {
        if ("aeiou".includes(arr[i])) {
            lower[arr[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            arr[i] = '#';  // Mark vowels with '#'
        } else if ("AEIOU".includes(arr[i])) {
            upper[arr[i].charCodeAt(0) - 'A'.charCodeAt(0)]++;
            arr[i] = '#';  // Mark vowels with '#'
        }
    }

    // Step 2: Build the sorted vowel string for uppercase vowels
    for (let i = 0; i < 26; i++) {
        let c = String.fromCharCode('A'.charCodeAt(0) + i);
        while (upper[i] > 0) {
            ans += c;
            upper[i]--;
        }
    }

    // Step 3: Build the sorted vowel string for lowercase vowels
    for (let i = 0; i < 26; i++) {
        let c = String.fromCharCode('a'.charCodeAt(0) + i);
        while (lower[i] > 0) {
            ans += c;
            lower[i]--;
        }
    }

    // Step 4: Replace marked vowels with sorted vowels
    let first = 0, second = 0;

    while (second < ans.length) {
        if (arr[first] === '#') {
            arr[first] = ans[second];
            second++;
        }
        first++;
    }

    return arr.join("");  // Convert array back to string
};