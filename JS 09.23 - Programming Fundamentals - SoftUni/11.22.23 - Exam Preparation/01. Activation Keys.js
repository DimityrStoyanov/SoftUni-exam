function solve(arr) {
    let text = arr.shift();
    let commands = arr.shift();

    while (commands !== `Generate`) {
        let tokens = commands.split(`>>>`);
        let token = tokens[0]
        if (token == `Contains`) {
            let substring = tokens[1];
            if (text.includes(substring)) {
                console.log(`${text} contains ${substring}`)
            } else {
                console.log(`Substring not found!`)
            }
        } else if (token == `Flip`) {
            let upperOrLower = tokens[1];
            let startIndex = tokens[2];
            let endIndex = tokens[3];
            if (upperOrLower == `Upper`) {
                let convert = (text.slice(startIndex, endIndex)).toUpperCase()
                text = text.slice(0, startIndex) + convert + (text.slice(endIndex))
                console.log(text);
            } else if (upperOrLower == `Lower`) {
                let convert = (text.slice(startIndex, endIndex)).toLowerCase()
                text = text.slice(0, startIndex) + convert + (text.slice(endIndex))
                console.log(text);
            }

        } else if (token == `Slice`) {
            let startIndex = tokens[1];
            let endIndex = tokens[2];
            text = text.slice(0, startIndex) + (text.slice(endIndex))
            console.log(text);
        }
        commands = arr.shift();
    }
    console.log(`Your activation key is: ${text}`);

}
solve((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
)
// solve((["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"])
// )