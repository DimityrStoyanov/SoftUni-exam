function solve(arr) {
    let myNum = arr.length - 1;
    let result = [];
    for (let i = 0; i <= myNum; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j])
        }
    }

    let pair = 0;
    for (let i = 0; i < result.length; i++) {
        if ( result[i] === result[i + arr.length] ){
            pair ++
        }
    }
    console.log(pair)
}
solve(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
)
solve(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
)