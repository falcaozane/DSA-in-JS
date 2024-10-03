const vect = [1, 2, 3, 4, 5];

// Input
console.log("Original Array:");
console.log(vect.join(" "));

// Prefix Sum Calculation
const prefix = calculatePrefixSum(vect);
console.log("Prefix Sum:");
console.log(prefix.join(" "));

// Suffix Sum Calculation
const suffix = calculateSuffixSum(vect);
console.log("Suffix Sum:");
console.log(suffix.join(" "));

// Helper functions
function calculatePrefixSum(arr) {
    const n = arr.length;
    const prefix = new Array(n);
    prefix[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}

function calculateSuffixSum(arr) {
    const n = arr.length;
    const suffix = new Array(n);
    suffix[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + arr[i];
    }
    return suffix;
}