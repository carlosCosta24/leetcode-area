let romanToInt = (s) => {
    let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let number = [1, 5, 10, 50, 100, 500, 1000]
    for (let y = 0; y < symbols.length; y++) {

        if (s.toUpperCase() != y) {
            console.log('please enter a valid symbol \'I, V, X, L, C, D, M\' ')
        }
    }
};

romanToInt("o")