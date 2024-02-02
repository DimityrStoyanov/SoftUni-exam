function solve(...data) {

    let result = {};

    for (let input of data) {
        let type = typeof (input)
        console.log(`${type}: ${input}`)
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }

    let arr = Object.entries(result).sort((a, b) => b[1] - a[1])

    for (let token of arr) {
        console.log(`${token[0]} = ${token[1]}`)
    }
}

// solve('cat', 42, function () { console.log('Hello world!'); })
solve(`dog`, 42, 43, 20, `mitko`, function () { console.log(`Teo`) })