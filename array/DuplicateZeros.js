/* MY code
var duplicateZeros = function(arr) {
    for(let i=0;i<arr.length;i++){
        //console.log(arr[i]);
        if(arr[i]==0){
            for(let j=arr.length-1;j>i;j--){
                arr[j] = arr[j-1] 
            }
            i++;
        }
    }
};
*/

var duplicateZeros = function(arr) {
    let len = arr.length;
    let i = 0;

    while (i < len) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0); // Insert a 0 at the current position
            arr.pop(); // Remove the last element to maintain the original length
            i += 2; // Skip the next element since it's a duplicate 0
        } else {
            i++;
        }
    }

    return arr;
};


var arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);