function bubbleSort(arr, n) {
    if (n === 1) {
        return arr;
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return bubbleSort(arr, n - 1);
}

let arr = [5, 4, 3, 2, 1];
bubbleSort(arr, arr.length);
console.log(arr);
