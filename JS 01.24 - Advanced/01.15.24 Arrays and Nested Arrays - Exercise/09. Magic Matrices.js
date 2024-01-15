function solve(arr) {
    let result = true;
    let sum = 0;
    for (let x of arr) {
        sum += Number(x[0])
    }

    for (let m of arr) {
        let current = 0
        for (let i = 0; i < arr.length; i++) {
            current += Number(m[i])
            if (sum == current) {
                result = true;
            } else {
                result = false
            }
        }
    }

    let result2 = true;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum2 += arr[0][i]
    }

    for (let j = 0; j < arr.length; j++) {
        let current = 0;
        for (let r of arr[j]) {
            current += Number(r)
        }
        if (sum2 == current) {
            result2 = true
        } else {
            result2 = false
        }
    }
    let final = Boolean
    if (result && result2) {
        final = true
    } else {
        final = false
    }
    return final
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