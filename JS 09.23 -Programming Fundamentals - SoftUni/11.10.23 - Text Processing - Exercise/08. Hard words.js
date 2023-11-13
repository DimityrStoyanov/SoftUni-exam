function solve([letter, arr]) {
    let symbol = "_"
    let letterAsArr = letter.split(` `)
    for (let word of arr) {
        let looking = symbol.repeat(word.length)
        for (let i = 0; i < letterAsArr.length; i++) {
            if (letterAsArr[i] == looking && letterAsArr[i].length == looking.length && letterAsArr[i].includes(`_`)) {
                letterAsArr[i] = word
            } else if (letterAsArr[i].endsWith(`.`) && letterAsArr[i].length - 1 == looking.length && letterAsArr[i].includes(`_`)) {
                letterAsArr[i] = word + `.`
            } else if (letterAsArr[i].endsWith(`,`) && letterAsArr[i].length - 1 == looking.length && letterAsArr[i].includes(`_`)) {
                letterAsArr[i] = word + `,`
            }
        }
    }

    console.log(letterAsArr.join(` `));
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)

