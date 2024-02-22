function solve(arr) {
    let num = arr.length;
    let sumRigth = 0;
    let sumLeft = 0;

    for (let i = 0; i < num; i++) {
        sumRigth += arr[i][i];
    }

    for (let j = 0; j < num; j++) {
        let support = num - j - 1
        sumLeft += arr[j][support]
    }

    let result = []
    result.push(sumRigth, sumLeft)
    console.log(result.join(` `));
}
solve([[20, 40], [10, 60]])
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])