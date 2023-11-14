function solve(arr) {
    let result = []
    for (let i = 0; arr[i] !== `end`; i++) {
        let [symbol, token] = arr[i].split(`:`)
        let nums = token.split(`/`)
        for (let index of nums) {
            result[index] = symbol
        }
    }

    
    console.log(result.join(``));

    
}
solve(['a:0/2/4/6',
    'b:1/3/5',
    'end']
)
solve(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
)