function frequency(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let maxFreq = 0;
    let minFreq = Infinity;
    let maxElem = null;
    let minElem = null;

    // Traverse through map and find max and min frequencies
    for (let [key, value] of map) {
        if (value > maxFreq) {
            maxFreq = value;
            maxElem = key;
        }
        if (value < minFreq) {
            minFreq = value;
            minElem = key;
        }
    }

    console.log("Max frequency: " + maxElem + " is " + maxFreq);
    console.log("Min frequency: " + minElem + " is " + minFreq);
}

let arr = [10, 5, 10, 15, 10, 5];
frequency(arr);
