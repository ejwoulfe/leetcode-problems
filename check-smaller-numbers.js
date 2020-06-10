// Input: nums = [8,1,2,2,3]
// Output: [4, 0, 1, 1, 3]

function smallerNumbersThanCurrent(nums) {
    let results = [];
    nums.map((value, index) => {
        let smalls = 0;
        for (let i = 0; i < nums.length; i++) {
            if (value > nums[i] && i !== index) {
                smalls++;

            }

        }
        results.push(smalls);
    })
    return results;

};


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));