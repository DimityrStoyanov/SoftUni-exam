function solve(arr) {
    let message = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(`|`);
        let command = token[0];
        if (command == `Move`) {
            let num = token[1];
            let end = message.substring(0, num);
            message = message.slice(num) + end;
            // console.log(message);
        } else if (command == `Insert`) {
            let index = Number(token[1]);
            let value = token[2];
            let myMessege = message.slice(0, index) + value + message.slice(index)
            message = myMessege;
            // console.log(message);
        } else if (command == `ChangeAll`) {
            let substring = token[1];
            let replacement = token[2];

            while (message.includes(substring)) {
                message = message.replace(substring, replacement)

            }
            // console.log(message);
        } else if (command == `Decode`) {
            console.log(`The decrypted message is: ${message}`)

        }

    }
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']
)