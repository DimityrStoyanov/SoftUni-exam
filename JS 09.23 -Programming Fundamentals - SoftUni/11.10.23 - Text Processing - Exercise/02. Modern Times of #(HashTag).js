function solve(letter) {
    let words = letter.split(` `)
    let specialSymbol = `#`
    for (let word of words) {
        if ((word.startsWith(`#`)) && word.length > 1 && !/\d/.test(word)) {
            console.log(word.substring(1))
        }
    }
}

solve('Nowadays everyone uses # to tag a #special #M word in #socialMedia')
// solve('The symbol # is known #variously in English-speaking #regions as the #number sign')