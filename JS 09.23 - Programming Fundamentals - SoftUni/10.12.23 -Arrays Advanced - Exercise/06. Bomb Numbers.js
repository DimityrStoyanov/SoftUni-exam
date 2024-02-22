function solve(arr1, bomb) {
    let bombNum = bomb[0];
    let indexDestroyed = bomb[1];
    for (let num of arr1) {
        if (num == bombNum) {
            let position = arr1.indexOf(num)
            arr1.splice(Math.max(0, position - indexDestroyed), indexDestroyed * 2 + 1, 0)
            
        }
    }
    let sum = 0
    for (let numToSum of arr1) {
        sum += numToSum
    }
    console.log(sum)
}
solve(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)
solve(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)