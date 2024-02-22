function solve(arr) {
    let client = arr.shift()
    let pattern = /%[A-Z][a-z]+%<\w+>\|\d+\|?\d+(\.\d+)?\$/;
    let patternName = /%[A-Z][a-z]+/g;
    let patternProduct = /<\w+>/g;
    let patternCount = /\|\d+\|/g;
    let patternPrice = /-?\d+(\.\d+)?\$/g;

    let result = 0

    while (client != 'end of shift') {
        if (pattern.test(client)) {

            let name = (client.match(patternName)).shift().slice(1)
            let product = (client.match(patternProduct)).shift().slice(1, -1)
            let count = (client.match(patternCount)).shift().slice(1, -1)
            let price = (client.match(patternPrice)).shift().replace(/\$/g, '')
            let sum = price * count
            result+= sum
            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
        }

        
        client = arr.shift()
    }
    console.log(`Total income: ${result.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)
// solve(['%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'])