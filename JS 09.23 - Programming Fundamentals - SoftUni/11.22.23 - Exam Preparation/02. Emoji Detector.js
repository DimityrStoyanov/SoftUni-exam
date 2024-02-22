function solve(arr) {
    let text = arr[0]
    let emojis = []
    let counter = 0;
    let threshold = 0;
    let thresholdSum = []
    let patternForEmoji = /(?<start>(\*{2}|:{2}))(?<word>[A-Z][a-z]{2,})(?<end>\1)/g;
    let word = text.matchAll(patternForEmoji)
    let patternForDigit = /(?<digit>\d+)/g;
    let digits = text.matchAll(patternForDigit)
    for (let num of digits) {
        let { digit } = num.groups;
        let arr = digit.split(``);
        arr.forEach(element => {
            thresholdSum.push(element)
        });
    }

    for (let i = 0; i < thresholdSum.length; i++) {
        let num = Number(thresholdSum[i])
        if (threshold == 0) {
            threshold = num
        } else {
            threshold *= num
        }
    }

    for (let token of word) {
        let { start, word, end } = token.groups
        let sum = 0;
        counter++
        for (let i = 0; i < word.length; i++) {
            let ascii = Number(word[i].charCodeAt());
            sum += ascii // До тук се смята колко е сбора от ASCII от всяка налична дума.
        }
        let emoji = start + word + end

        if (sum > threshold) {
            emojis.push(emoji)
        }


    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    emojis.forEach(element => {
        console.log(element)

    });

}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])