// JS code
let arr1 = []

let arr2 = [ 1, 2, 3, 4, 5 ];
let arr3 = [ 'a', 'b', 'c', 'd', 'e' ];
let arr4 = [ 1.4, 2.0, 24, 5.0, 0.0 ];

// Dynamic Sized Array
let arrDyn = new Array();

let arr5 = [1, 2, 4, 5,6]
// Traversing over arr[]
// for (let x of arr5)
//     console.log(x)

// javascript Program to Insert an element
// at a specific position in an Array
function insertElement(arr, n, x, pos)
{
    // shift elements to the right
    // which are on the right side of pos
    var i = n - 1;
    for (i; i >= pos; i--)
    {
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;
}

insertElement(arr5,arr5.length,3,2)


function display(arr) {
    for (let x of arr){
        console.log(x);
    }
}

display(arr5)

// function to search a key to  be deleted
function findElement(arr,n,key)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
    return -1;
} 
     
// Function to delete an element
function deleteElement(arr,n,key)
{
    // Find position of element to be deleted
    let pos = findElement(arr, n, key);
      
    if (pos == -1)
    {
        console.log("Element not found");
        return n;
    }
    // Deleting element
    let i;
    for (i = pos; i< n - 1; i++)
        arr[i] = arr[i + 1];
    return n - 1;
}

console.log("\n deleting \n")

deleteElement(arr5,arr5.length,4)

display(arr5)
