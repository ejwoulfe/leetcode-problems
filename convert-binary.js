function getDecimalValue(nums) {
    let reversedNums = nums.reverse();
    let total = 0;
    for (let i = 0; i < reversedNums.length; i++) {
        if (reversedNums[i] === 1) {
            total += Math.pow(2, i);

        }

    }

    return total;

};

console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]))