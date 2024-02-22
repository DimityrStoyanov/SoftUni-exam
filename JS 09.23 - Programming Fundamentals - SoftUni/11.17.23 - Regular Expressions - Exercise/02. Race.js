function solve(arr) {
    let names = arr.shift().split(`, `)
    let result = {};
    for (let name of names) {
        result[name] = 0
    }

    let patternText = /[A-Za-z]/g;
    let patternDigit = /\d/g;

    let command = arr.shift()
    while (command != `end of race`) {
        let name = command.match(patternText).join(``)
        let digigatals = command.match(patternDigit)
        let distance = 0;
        for (let digi of digigatals) {
            distance += Number(digi)
        }

        if (result.hasOwnProperty(name)) {
            result[name] += distance
        }

        command = arr.shift()
    }

    let entries = Object.entries(result)
    entries.sort((a, b) => b[1] - a[1]);
    let sortedObj = Object.fromEntries(entries);
    let keys = Object.keys(sortedObj)
    console.log(`1st place: ${keys[0]}`);
    console.log(`2nd place: ${keys[1]}`);
    console.log(`3rd place: ${keys[2]}`);
}



solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)
solve([`Ronald, Bill, Tom, Timmy,
    Maggie, Michonne`,
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)