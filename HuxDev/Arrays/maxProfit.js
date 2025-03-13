/*

**MaxProfit**

Imagine you're buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high **only once**.

Here's what you're given:

A list of stock prices for each day ➡️ [7, 1, 5, 3, 6, 4]

Here's what you need to find:

The difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.


*/


const prices = [7,1,5,3,6,4];

function maxProfit(prices) {    
    let min = prices[0];    // assume the first price is the lowest
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {  
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    return max;
}

// huxdev



const maxProfitHux=(prices) => {

    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++){

        const currentPrice = prices[i];
        minPrice = Math.min(minPrice,currentPrice);

        const potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);

    }

    return maxProfit
}




console.log(maxProfit(prices));

console.log(maxProfitHux(prices));