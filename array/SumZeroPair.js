// checking sum zero 
// [-5,-4,-3,-2,0,2,4,6,8] -> input

function getsumPair(arr){
    // o(n^2) no. of iterations = 16
   /*
    for (let i of arr) {
        console.log("Outer Loop");
        for(let j = 1; j<arr.length;j++){
            console.log("Inner Loop");
            if(i+arr[j]===0){
                //console.log(arr[i],arr[j]);
                return[i,arr[j]];
            }
            //continue;
        }
    }
    */

   // O(n) no. of iterations = 4
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        console.log("Loop");
        sum = arr[l]+arr[r];
        if(sum ===0){
            return[arr[l],arr[r]];
        }
        else if(sum > 0){
            r--;
        }
        else{
            l++;
        }
    }
}

function my(arr){
    for(let k of arr){
   
        for(let v = 1; v<arr.length; v++){
         
         if(k+arr[v] === 0){
             
            return[k,arr[v]];

         }
         //continue;
        }
     }
}

arr = [-5,-4,-3,-2,0,2,4,6,8]

console.log(getsumPair(arr));
//console.log(my(arr));


