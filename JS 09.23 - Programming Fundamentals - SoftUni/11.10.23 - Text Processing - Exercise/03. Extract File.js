function solve(location) {
    let tokens = location.split(`\\`)
    let lookingFile = tokens[tokens.length - 1]
    let result = lookingFile.split(`.`)
    let name = []
    for (let word of result) {
        if ( word == result[result.length - 1]){
            break;
        } else {
            name.push(word)
        }
    }

let extension = result[result.length - 1]
console.log(`File name: ${name.join(`.`)}`);
console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.mitko.bak.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')