let nums = [1,1,0,1,1,1]

function findMaxNoOfOnes(arr){
  let count = 0;
  let maxi = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]===1){
        count++;
    }
    else{
        count=0;
    }

    maxi = Math.max(maxi,count);
    
  }

  return maxi
}

console.log(findMaxNoOfOnes(nums))