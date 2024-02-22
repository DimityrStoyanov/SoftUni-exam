function solve(arr) {
    let text = arr.shift();
    let command = arr.shift();

    while (command !== `Travel`) {
        tokens = command.split(`:`)
        let action = tokens.shift();
        if (action == `Add Stop`) {
            let startIndex = Number(tokens.shift());
            let insert = tokens.shift();
            if (text.length > startIndex) {
                let insertWithNewText = text.slice(0, startIndex) + insert + text.slice(startIndex)
                text = insertWithNewText
                console.log(text)
            } else {
                console.log(text)
            }

        } else if (action == `Remove Stop`) {
            let startIndex = Number(tokens.shift());
            let endIndex = Number(tokens.shift());
            if (startIndex < text.length && endIndex < text.length) {
                let modifyText = text.slice(0, startIndex) + text.slice(endIndex + 1);
                text = modifyText;
                console.log(text);
            } else {
                console.log(text)
            }
        } else if (action == `Switch`) {
            let switched = tokens.shift();
            let swithWith = tokens.shift();
            if (text.includes(switched)) {

                let switchedText = text.replace(switched, swithWith);
                text = switchedText
                console.log(text)
            } else {
                console.log(text)
            }
        }

        command = arr.shift();
    }

    if (command == `Travel`) {
        console.log(`Ready for world tour! Planned stops: ${text}`)
    }
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
