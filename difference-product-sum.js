// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


function subtractProductAndSum(n) {
    if (isNaN(n)) {
        return "Can only be a number."
    }

    let splitNumber = n.toString().split("");
    let product = 1;
    let sum = 0;
    for (let i = 0; i < splitNumber.length; i++) {
        sum += parseInt(splitNumber[i])
        product *= parseInt(splitNumber[i])


    }
    return product - sum;



};


console.log(subtractProductAndSum(234))