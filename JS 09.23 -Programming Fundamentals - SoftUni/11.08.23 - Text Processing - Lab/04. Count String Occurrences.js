function solve(text, str) {

    let count = 0;

    let words = text.split(` `)
    for (let looking of words) {
        if (looking == str) {
            count++
        }
    }
    console.log(count);
}
solve('This is a word and it also is a sentence', 'is')
solve('softuni is great place for learning new programming languages', 'softuni')