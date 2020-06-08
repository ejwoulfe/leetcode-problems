/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// candies = [2,3,5,1,3], extraCandies = 3
var kidsWithCandies = function (candies, extraCandies) {

    let max = 0;
    let resultArr = [];
    let maxCandies = Math.max(...candies);

    for (let z = 0; z < candies.length; z++) {
        if (candies[z] + extraCandies >= maxCandies) {
            resultArr.push(true)
        } else {
            resultArr.push(false)
        }
    }

    return resultArr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));