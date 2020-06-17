function maxProfit(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {

        if (prices[i] > prices[i - 1]) {
            console.log(maxprofit)

            maxprofit += prices[i] - prices[i - 1];
        }
    }
    return maxprofit;
}

console.log(maxProfit([0, 1, 5, 8, 2, 4, 6]));