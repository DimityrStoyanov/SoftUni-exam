function solve(arr) {
    let myObj = {};
    let token = arr.shift().split(` `);

    for (let word of token) {
        myObj[word] = 0;
    }


    for (let word of arr) {
        if (word in myObj) {
            myObj[word]++

        }
    }
    let objAsArr = Object.entries(myObj).sort((a, b) => b[1] - a[1])
    // objAsArr

    for (let result of objAsArr) {
        let [word, count] = result;
        console.log(word, `-`, count);

    }
}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'sentence', 'sentence', 'sentence', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)