let romanToInt = (s) => {
    let symbols = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let result = 0


    for (o = 0; o < s.length; o++) {

        let current = symbols[s[o]]
        let next = symbols[s[o + 1]]
        if (current === undefined) {
            console.log('please enter a valid symbol \'I, V, X, L, C, D, M\' ')
            return
        }

        else if (next !== undefined && current < next) {
            result += next - current
            o++
        } else {
            result += current
        }

        result += current

    }
    console.log(result)
    return result


};

romanToInt("iii")
