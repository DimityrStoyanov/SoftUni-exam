function solve(input) {
    let input1 = input.toLowerCase()
    let arr = input1.split(` `)
    let base = {};

    for (let word of arr) {
        if (!(word in base)) {
            base[word] = 1

        } else {
            base[word]++
        }
    }
    // console.log(base);

    let newArr = Object.entries(base)
    let result = {}

    for (let [key, value] of newArr) {
        if (value % 2 !== 0) {
            result[key] = value
        }
    }
    let final = ``
    for (let end of arr) {
        if (end in result && !final.includes(end)) {
            final += end + ` `
        }
    }
    console.log(final);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// solve('Cake IS SWEET is Soft CAKE sweet Food')