function solve(k, n) {
    let result = [1];
    let workArr =[]

    for (let i = 1; i < k; i++) {
        workArr = result.slice(-n);
        let numForResult = 0
        for (let currentNum of workArr){
        numForResult += Number(currentNum)
            }
        result.push(numForResult)


    }
    console.log(result.join(` `))

}
solve(6, 3)
solve(8, 2)