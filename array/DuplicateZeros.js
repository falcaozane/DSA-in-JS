
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


var arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);