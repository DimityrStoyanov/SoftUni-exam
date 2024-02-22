function solve(arr) {
    let text = arr.shift()

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(`:|:`)

        if (command[0] == "ChangeAll") {
            let substring = command[1];
            let replace = command[2];
            text = text.replace(new RegExp(substring, 'g'), replace)
            console.log(text);

        } else if (command[0] == "Reverse") {
            let substring = command[1];
            let indexStart = text.indexOf(substring) //трябва да се довършва, хваща само индекса.

            if (indexStart == -1) {
                console.log(`error`)
            } else {
                reverse = substring.split(``).reverse().join(``)
                text = text.split(substring).join(``) + reverse
                console.log(text);
            }

        } else if (command[0] == "InsertSpace") {
            let index = command[1]
            let modifiedString = text.slice(0, index) + ` ` + text.slice(index);
            text = modifiedString
            console.log(text);
        } else if (command[0] == "Reveal") {
            console.log(`You have a new text message: ${text}`);

        }
    }
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)