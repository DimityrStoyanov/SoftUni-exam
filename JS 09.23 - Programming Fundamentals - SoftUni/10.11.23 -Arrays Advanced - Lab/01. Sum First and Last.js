function solve(arr) {
    let firstArr = Number(arr.pop())
    let lastArr = Number(arr.shift())

    console.log(firstArr + lastArr);
}
solve(['20', '30', '40'])
solve(['5', '10'])
solve(['5', '10', '7'])