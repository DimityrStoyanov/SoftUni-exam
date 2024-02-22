function solve(arr) {
    let resultOfRow = Boolean;
    let resultOfCollum = Boolean;
    let sumOfRow = [];
    let sumOfCollum = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        sumOfRow.push(sum)
    }

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[j][i];
        }
        sumOfCollum.push(sum)
    }

    for (let i = 1; i < sumOfRow.length; i++) {
        if (sumOfRow[i - 1] == sumOfRow[i]) {
            resultOfRow = true
        }
    }

    for (let i = 1; i < sumOfCollum.length; i++) {
        if (sumOfCollum[i - 1] == sumOfCollum[i]) {
            resultOfCollum = true
        }
    }

    if ( resultOfCollum == true&& resultOfRow == true){
        return true
    } else {
        return false
    }
}
console.log(solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))
console.log(solve(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
))
console.log(solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
))