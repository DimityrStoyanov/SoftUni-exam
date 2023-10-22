function solve(arr) {
    let kNum = arr.shift()
   

    console.log((arr.slice(0,kNum)).join(` `));
    console.log((arr.slice(-kNum)).join(` `));

}
solve([2,
    7, 8, 9]
)
solve([3,
    6, 7, 8, 9]
)