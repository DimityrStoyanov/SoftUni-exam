function solve(arr, num) {

    for (let i = 0; i < num; i++) {
        let lastNum = arr.pop()
        arr.unshift(lastNum)
    }

    console.log(arr.join(` `))

}
solve(['1',
    '2',
    '3',
    '4'],
    2
)
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)