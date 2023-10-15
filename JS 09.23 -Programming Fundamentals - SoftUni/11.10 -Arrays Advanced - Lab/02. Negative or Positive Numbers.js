function solve(arr) {
    let result = [];

    for (let currentNum of arr) {
        if (Number(currentNum) < 0) {
            result.unshift(currentNum)

        } else {
            result.push(currentNum)
        }
    }
    console.log(result.join(`\n`));
}
solve(['7', '-2', '8', '9'])
solve(['3', '-2', '0', '-1'])
solve(['5', '10', '-7', '2'])