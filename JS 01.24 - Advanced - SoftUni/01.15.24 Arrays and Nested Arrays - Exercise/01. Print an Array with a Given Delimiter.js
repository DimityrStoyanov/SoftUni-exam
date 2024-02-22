function solve(arr, string) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
        if ( i < arr.length - 1){
            result.push(string)
        }
    }
    console.log(result.join``)
}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)
solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
)
