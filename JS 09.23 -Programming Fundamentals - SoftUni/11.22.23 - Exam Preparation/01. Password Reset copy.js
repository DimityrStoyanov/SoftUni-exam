function solve(arr) {
    let text = arr.shift();
    let command = arr.shift();
    let result = []

    while (command !== `Done`) {
        let token = command.split(` `);
        let action = token.shift();
        if (action == `TakeOdd`) { //Първия случай работи, взема само нечетните индекси.
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    result.push(text[i])
                }
            }
            console.log(result.join(``))
            text = result.join(``)
        }
        else if (action == `Cut`) {
            let [index, length] = token;
            let endIndex = Number(index) + Number(length)
            text = text.slice(0, index) + text.slice(endIndex)
            console.log(text);
        }
        else if (action == `Substitute`) {
            let [substring, substitute] = token;
            if (text.includes(substring)) {
                while (text.includes(substring)) {
                    text = text.replace(substring, substitute)
                }
                console.log(text)
            } else {
                console.log(`Nothing to replace!`)
            }
        }

        command = arr.shift();
    }
    console.log(`Your password is: ${text}`)

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