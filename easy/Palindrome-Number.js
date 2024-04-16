isPalindrome = function (x) {
    let forward = x.toString().split('').map(Number)
    let backword = forward.slice().reverse()
    let forwardNumber = forward.join('')
    let backwordNumber = backword.join('')
    let isPalindrome
    if (isNaN(forward[0]) || backword[0] == 0) return console.log(false)
    if (forwardNumber === backwordNumber) isPalindrome = true
    console.log(isPalindrome)
};
isPalindrome(-121)
isPalindrome(141)
isPalindrome(11)
isPalindrome(10)

