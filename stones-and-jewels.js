// Input: J = "aA", S = "aAAbbbb"
// Output: 3

function numJewelsInStones(J, S) {
    let jewels = J.split("");
    let totalJewels = 0;

    for (let i = 0; i < S.length; i++) {

        if (jewels.includes(S[i])) {
            totalJewels++;
        }
    }
    return totalJewels;



};

console.log(numJewelsInStones("aA", "aAAbbbb"));