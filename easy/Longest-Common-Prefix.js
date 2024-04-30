var longestCommonPrefix = function (strs) {
    let prefix = " ";

    for (let r = 0; r < strs[0].length; r++) {

        let temp = strs[0][r]

        for (let o = 1; o < strs.length; o++) {

            if (r >= strs[o].length || strs[o][r] !== temp) {
                return prefix

            }


        }
        prefix += temp


    }
    console.log(prefix)
    return prefix

};
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))