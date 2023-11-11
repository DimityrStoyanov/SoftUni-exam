function solve(word, text) {

    let wordLower = word.toLowerCase();
    let textLower = text.toLowerCase();
    let letter = textLower.split(` `)
    let findOrNot = 0;
    for (let words of letter) {
        if (words == wordLower) {
            console.log(word)
            findOrNot++
            break;
        } else { 
            
        }
    }
    if (findOrNot = 0){
        console.log(`${word} not found!`)
    }
    // if (text.toLowerCase().includes(word.toLowerCase())) {
    //     console.log(word.toLowerCase())

    // } else {
    //     console.log(`${word} not found!`)
    // }
}

solve('javascript',
    'JavaScript is the best programming JavaScript language'
)
solve('Python',
    'JavaScript is the best python programming language'
)