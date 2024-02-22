function solve(text, str) {
    let simbol = `*`
    let leng = simbol.repeat((str.length))
console.log(text.split(`${str}`).join(`${leng}`))

}
solve('A small sentence with some words', 'small')
solve('Find the hidden word', 'hidden')