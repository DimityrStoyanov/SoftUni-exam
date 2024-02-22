function solve(text) {
    let splited = text.split(``)
    let result = [splited[0]]

    for (let i = 1; i < splited.length; i++) {
        if (splited[i] == splited[i - 1]) { 

        } else {
            result.push(splited[i])
        }
    }
    console.log(result.join(``));
}

solve('aaaaabbbbbcdddeeeedssaa')
// solve('qqqwerqwecccwd')