// Given an array, rotate the array to the right by k steps, where k is non-negative.



function rotateArray(nums, k) {

    let rotatedNums = [];
    let length = nums.length;
    for (let i = nums.length - k; i < length; i++) {

        if (i === nums.length - 1) {
            rotatedNums.push(nums[i]);

            i = 0;
            length = nums.length - k;

        }
        rotatedNums.push(nums[i]);
    }
    nums = rotatedNums;

    return nums;

}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))