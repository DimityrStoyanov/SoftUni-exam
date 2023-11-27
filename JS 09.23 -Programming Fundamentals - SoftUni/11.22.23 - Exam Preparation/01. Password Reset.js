function solve(arr) {
    let text = arr.shift();
    let command = arr.shift();
    let result = []

    while (command !== `Done`) {
        if (command.includes(`TakeOdd`)) {
            let token = text.split(``)
            for (let i = 0; i < token.length; i++) {
                if (i % 2 !== 0) {
                    result.push(token[i])
                }
            }
            console.log(result.join(``))
        } else if (command.includes(`Cut `)) {
            let [com, index, length] = command.split(` `)
            result.splice(index, length)
            console.log(result.join(``))
        } else if (command.includes(`Substitute `)) {
            let [com, substring, substitute] = command.split(` `)
            let pass = result.join(``)


            if (pass.includes(substring)) {

                while (pass.includes(substring)) {
                    pass = pass.replace(substring, substitute)
                }
                console.log(pass)
                result = pass.split(``)
            } else {
                console.log(`Nothing to replace!`)
            }
        }
        command = arr.shift();
    }
    console.log(`Your password is: ${result.join(``)}`)

}
solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)
solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
)