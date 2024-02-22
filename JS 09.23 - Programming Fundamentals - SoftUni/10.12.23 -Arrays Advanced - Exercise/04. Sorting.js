function solve(arr) {
    let result = [];
    arr.sort((a, b) => b - a)
    while (arr.length > 0) {
        let largest = arr.shift();
        result.push(largest)
        let smalest = arr.pop();
        result.push(smalest)
    }
    console.log(result.join(` `));

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])