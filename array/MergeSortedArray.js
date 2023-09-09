
var merge = function(nums1, m, nums2, n) {
    for(let j=0;j<nums2.length;j++){
       nums1[m+j] = nums2[j];
   }
   nums1.sort((a,b)=> {return a-b})
   return nums1;
};

var num1 = [1,2,3,0,0,0]
var num2 = [4,5,6]
var m = 3
var n = 3

var num = merge(num1,m,num2,n);
console.log(num);