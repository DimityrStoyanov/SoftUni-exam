function solve(arr) {
    let word = arr.shift();

    let command = arr.shift();

    while (command !== `Abracadabra`) {
        let token = command.split(` `);
        let spell = token.shift();

        if (spell == `Abjuration`) {

            let upperCaseText = word.toUpperCase()
            word = upperCaseText
            console.log(word);


        }
        else if (spell == `Necromancy`) {
            let lowerCaseText = word.toLowerCase()
            word = lowerCaseText
            console.log(word);

        }
        else if (spell == `Illusion`) {
            let index = Number(token.shift());
            let letter = token.shift();
            if (word.length <=  index || index == NaN || index < 0) {
                console.log(`The spell was too weak.`)
            } else {
                let wordArray = word.split(``);
                wordArray[index] = letter;
                let updatedWord = wordArray.join(``);
                word = updatedWord;
                console.log(`Done!`);
            }

        }
        else if (spell == `Divination`) {
            let firstSubstring = token.shift();
            let secondSubstring = token.shift();

            if (word.includes(firstSubstring)) {
                while (word.includes(firstSubstring)) {
                    word = word.replace(firstSubstring, secondSubstring)
                }
                console.log(word)
            }

        }
        else if (spell == `Alteration`) {
            let substring = token.shift();
            if (word.includes(substring)) {
                let resultString = word.replace(substring, "");
                word = resultString;
                console.log(word);
            }

        }
        else {
            console.log(`The spell did not work!`)
        }


        command = arr.shift(); // края на цикъла.
    }



}
// solve(["A7ci0",
//     "Illusion 1 c",
//     "Illusion 4 o",
//     "Abjuration",
//     "Abracadabra"])
// solve(["TR1GG3R",
//     "Necromancy",
//     "Illusion 8 m",
//     "Illusion 9 n",
//     "Abracadabra"])
// solve(["SwordMaster",
//     "Target Target Target",
//     "Abjuration",
//     "Necromancy",
//     "Alteration master",
//     "Abracadabra"])
solve(["M1tk00",
    "Necromancy",
    "Illusion 1 i",
    "Divination 0 o",
    "Necromancy",
    "vesi 1 ",
    "Divination m S",
    "Alteration Si",
    "Abracadabra"
])