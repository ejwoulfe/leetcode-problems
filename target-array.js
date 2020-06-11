// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.


function createTargetArray(nums, index) {
    let targetArray = [];
    nums.map((value, i) => {
        targetArray.splice(index[i], 0, value)

    })

    return targetArray

};

// function createTargetArray(nums, index) {
//     let targetArray = [];
//     for (let i = 0; i < nums.length; i++) {
//         targetArray.splice(index[i], 0, nums[i])

//     };

//     return targetArray

// };

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))