function removeDuplicates(nums) {
    let firstOccurence = nums[0];
    let indexOfFirst = 0;

    for (let i = 0; i < nums.length; i++) {





        if (nums[i] !== firstOccurence) {



            nums.splice(indexOfFirst + 1, i - indexOfFirst - 1)

            i = indexOfFirst;
            indexOfFirst = i + 1;
            firstOccurence = nums[indexOfFirst];


        }
        if (i === nums.length - 1) {
            nums.splice(indexOfFirst + 1, nums.length - indexOfFirst)

        }
    }
    return nums.length;


};


console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 4, 4]))