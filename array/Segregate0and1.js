// two pointer
function segregateZeroAndOne(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // If start is already 0, move the start pointer forward
        if (arr[start] === 0) {
            start++;
        } 
        // If end is 1, move the end pointer backward
        else if (arr[end] === 1) {
            end--;
        } 
        // If start is 1 and end is 0, swap and move both pointers
        else {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
}

const arr = [1, 0, 1, 0, 1, 0];
console.log("Before:", arr);

segregateZeroAndOne(arr);
console.log("After:", arr);
