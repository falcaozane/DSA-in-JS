/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freqMap = {}; // object of key : value pairs
    const freqSet = new Set(); // hash set , no repeated values 

    // Store the frequency of each element in the input array
    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Insert each frequency into the set
    for (let freq of Object.values(freqMap)) {
        freqSet.add(freq);
    }

    // Compare the size of the object and the set
    return Object.keys(freqMap).length === freqSet.size; 
};
