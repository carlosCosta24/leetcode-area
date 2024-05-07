var isValid = function (s) {
    let stack = []
    for (let y = 0; y < s.length; y++) {
        let x = s.charAt(y)
        switch (x) {
            case '(':
                stack.push(')')
                break
            case '[':
                stack.push(']')
                break
            case '{':
                stack.push('}')
                break
            default:
                if (x !== stack.pop()) {
                    return false
                }

        }

    }
    return stack.length === 0
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
