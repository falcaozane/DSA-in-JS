function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const arr = [2, 5, 7, 8, 11, 12];
const target = 11;
const index = binarySearchIterative(arr, target);
console.log(index); // Output: 4

const target2 = 13;
const index2 = binarySearchIterative(arr, target2);
console.log(index2); // Output: -1


function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search right half
    } else {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search left half
    }
}

// Example usage (same as above):
const arr2 = [2, 5, 7, 8, 11, 12];
const target3 = 11;
const index3 = binarySearchRecursive(arr2, target3);
console.log(index3); // Output: 4

const target4 = 13;
const index4 = binarySearchRecursive(arr2, target4);
console.log(index4); // Output: -1
