function solve(words, string) {
    let symbol = `*`;

    let lookingWords = words.split(`, `)
    let newString = ``
    for (let lookingWord of lookingWords) {

        let leng = lookingWord.length
        let place = symbol.repeat(leng)
        if (newString.includes(place)) {
            newString = newString.replace(place, lookingWord)
        } else if (string.includes(place)) {
            newString = string.replace(place, lookingWord)
        }

    }
    console.log(newString);


}

// solve('great',
// 'softuni is ***** place for learning new programming languages'
// )
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)