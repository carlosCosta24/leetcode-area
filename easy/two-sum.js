//to sum challenge
var twoSum = function (nums, target) {
    let first
    let sec
    for (let o = 0; o < nums.length; o++) {
        for (let x = o + 1; x < nums.length; x++) {
            if (nums[o] + nums[x] === target) {
                first = o
                sec = x
            }
        }

    }
    return [first, sec]
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))

