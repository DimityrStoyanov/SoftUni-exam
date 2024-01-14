function solve(arr) {
    let firstNum = Number(arr.shift())
    let lastNum = Number(arr.pop())
    let sum = firstNum + lastNum
    return sum

}
solve(['20', '30', '40'])
solve(['5', '10'])