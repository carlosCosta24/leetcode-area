let romanToInt = (s) => {
    let symbols = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let result = 0


    for (o = 0; o < s.length; o++) {
        let current = s[o]
        let next = s[o + 1]
        if (symbols[current] < symbols[next]) {
            result -= symbols[current]
        } else {
            result += symbols[current]
        }
    }
    console.log(result)

    return result


};

romanToInt("III")
