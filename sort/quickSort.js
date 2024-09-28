function quickSort(arr, low, high) {
    if (low >= high) return;

    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (i <= j && arr[i] <= pivot) i++;
        while (i <= j && arr[j] > pivot) j--;

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

let arr = [5, 4, 3, 2, 1];

quickSort(arr, 0, arr.length - 1);

console.log(arr); // outputs: [1, 2, 3, 4, 5]