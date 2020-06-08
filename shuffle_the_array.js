//1470. Shuffle the Array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function (nums, n) {
    let shuffledArr = [];

    for (let i = 0; i < n; i++) {
        shuffledArr.push(nums[i]);
        shuffledArr.push(nums[i + n])
    }

    return shuffledArr;
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))