function solve(arr) {
    result = [];
    let half = Math.floor(arr.length / 2);
    arr.sort((a, b) => a - b).splice(0, half)
    return arr
}
solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])