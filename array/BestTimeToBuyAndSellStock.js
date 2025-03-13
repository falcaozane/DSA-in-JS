// link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function(prices) {
    let i=0;
    let j=1;
    let maxP = 0;
    while(j<prices.length){
        if(prices[j]>prices[i]){
            maxP = Math.max(maxP, prices[j]-prices[i]);
        }
        else{
            i=j;
        }
        j++;
    }

    return maxP;
};


let prices = [7,1,5,3,6,4]

console.log(maxProfit(prices));