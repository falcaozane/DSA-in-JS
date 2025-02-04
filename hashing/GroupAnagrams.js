/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const mp = new Map()

    for(let str of strs){
        const word = str.split('').sort().join('');
        if(!mp.has(word)){
            mp.set(word,[])
        }
        mp.get(word).push(str)
    }

    let ans = []
    for(const [key,value] of mp){
        ans.push(value);
    }

    return ans;
};

// Example usage
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]