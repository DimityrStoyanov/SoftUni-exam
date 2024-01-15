function solve(arr) {
    arr.sort((a, b) => a - b)
    let result = [];
    while (arr.length > 0) {
        result.push(arr.shift())
        result.push(arr.pop())
    }
    return result

}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
console.log(solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]))
