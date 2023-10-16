function solve(arr) {
    let guess = []

    for (let command of arr) {
        let status = command.split(` `)
        let name = status.shift()
        if (status.includes(`not`)) {
            if (guess.includes(name)) {
                let index = guess.indexOf(name)
                guess.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if ( guess.includes(name)){
                console.log(`${name} is already in the list!`);
            } else {
                guess.push(name);
            }
        }
    }
console.log(guess.join(`\n`));
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
//  solve(['Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!']
// )
