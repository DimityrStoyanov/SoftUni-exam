function solve(myArr) {
    let num = myArr.length;
    let result = [];
    for (let i = 0; i < num; i++) {
        let arr = myArr[i]
        arr.forEach(element => {
            result.push(element)
        });
    }

    result.sort((a, b) => b - a)
    console.log(result[0])
}
solve(
    [[20, 50, 10],
    [8, 33, 145]]
)
solve(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
)