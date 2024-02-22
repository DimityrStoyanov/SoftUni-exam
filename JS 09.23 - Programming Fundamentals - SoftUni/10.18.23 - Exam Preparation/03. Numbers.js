function solve(input) {
    let arr = input.split(` `).map(Number)
    let sum = 0;
    let result = []

    for (let currentNum of arr) {
        sum += currentNum
    }
    let avg = sum / arr.length

    for (let newNum of arr) {
        if (newNum > avg) {
            result.push(newNum)
        }
        result.sort((a, b) => b - a).join(` `)
    }
    let finalResult = ``
    for (let i = 0; i < 5; i++) {
        if (result[i] == undefined) {
            break
        }
        finalResult += result[i] + ` `
    }
    if (result.length == 0) {
        console.log(`No`);
    } else {
        console.log(finalResult);
    }


}
solve('10 20 30 40 50')
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')
solve('1')
solve('-1 -2 -3 -4 -5 -6')