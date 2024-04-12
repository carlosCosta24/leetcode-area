var isPalindrome = function (x) {
    let forward = x.toString().split('').map(Number)
    let backword = forward.reverse()
    let ItsTrue
    for (let u = 0; u < forward.length; u++) {
        for (let e = 0; e < backword.length; e++) {
            if (forward[u] === backword[e]) {
                return true
            }
        }
        ItsTrue = true
    }
    return ItsTrue
};
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
