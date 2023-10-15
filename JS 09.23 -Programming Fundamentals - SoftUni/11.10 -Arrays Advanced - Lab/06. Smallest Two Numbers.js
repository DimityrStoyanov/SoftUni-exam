function solve(arr) {
    // console.log((arr.sort((a, b) => a-b)).slice(0,2))
    return ((arr.sort((a, b) => a-b)).slice(0,2)).join(' ')
}
solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])