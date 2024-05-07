var mergeTwoLists = function (list1, list2) {
    let output = listNode()
    let Longest = list1.length > list2.length ? list1 : list2
    for (x = 0; x < Longest.length; x++) {

        if (list1[x] !== undefined) {
            output.push(Longest[x])
            output.push(Longest[x])
        }



    }
    return output

};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([], []))
console.log(mergeTwoLists([], [0]))