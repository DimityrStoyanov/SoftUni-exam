function solve(word, text) {

    if (text.toLowerCase().split(` `).includes(word.toLowerCase())) {
        console.log(word.toLowerCase())

    } else {
        console.log(`${word} not found!`)
    }
}

solve('javascript',
    'JavaScript is the best programming JavaScript language'
)
solve('Python',
    'JavaScript is the best programming language'
)