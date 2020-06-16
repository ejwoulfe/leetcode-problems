// Given the array prices where prices[i] is the price of the ith item in a shop.There is a special discount
// for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] 
// where j is the minimum index such that j > i and prices[j] <= prices[i], 
// otherwise, you will not receive any discount at all.


function finalPrices(prices) {
    let discountedPrices = [];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j <= prices.length; j++) {

            if (j === prices.length) {
                discountedPrices.push(prices[i])
            } else if (prices[j] <= prices[i]) {
                discountedPrices.push(prices[i] - prices[j]);
                break;

            }



        }




    }

    return discountedPrices;

};

console.log([8, 4, 6, 2, 3])
console.log(finalPrices([8, 4, 6, 2, 3]))