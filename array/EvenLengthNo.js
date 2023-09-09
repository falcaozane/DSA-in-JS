let nums = [12,733,1,222];

function digitLength1(nums){
    for(let i=0;i<nums.length;i++){
        console.log(nums[i]);
        let j = nums[i].toString().length
        //console.log(j.length)
        if(j%2===0){
            console.log("Number is of even length")
        }
        
        console.log("Number is of odd length")
    }
    
}

//digitLength1(nums)


function digitLen(nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]; // Get the current number
        let digit = 0; // Initialize the digit count for the current number

        // Count the digits in the current number
        while (num !== 0) {
            num = Math.floor(num / 10);
            ++digit;
        }

        console.log(`Number ${nums[i]} has ${digit} digits.`);
        
    }
}

//digitLen(nums)

var findNumbers = function(nums){
    let count = 0;
    
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        let digits = 0;
        while(num!==0){
            num=Math.floor(num/10);
            ++digits;
        }
        if(digits % 2===0){
            count++;
        }
    }
    return count;
}

console.log(findNumbers(nums));