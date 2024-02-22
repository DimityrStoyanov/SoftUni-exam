function solve(arr) {
    let numOfPieces = Number(arr.shift());
    let result = {};

    for (let i = 0; i < numOfPieces; i++) {
        let token = arr.shift().split(`|`)
        let [piece, composer, key] = token;
        info = {
            composer: composer,
            key: key
        }
        result[piece] = info
    }

    // До момента вкарва цялата информация 
    // Синтаксиса е piece : composer, key 

    let action = arr.shift()
    while (action !== `Stop`) {
        let token = action.split(`|`)
        let command = token.shift()

        if (command == `Add`) {
            let [piece, composer, key] = token
            if (result.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`)
            } else {
                info = {
                    composer: composer,
                    key: key
                }
                result[piece] = info
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        }
        else if (command == `Remove`) {
            let piece = token.shift()
            if (result.hasOwnProperty(piece)) {
                console.log(`Successfully removed ${piece}!`)
                delete result[piece];
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
        else if (command == `ChangeKey`) {
            let [piece, newKey] = token;
            if (result.hasOwnProperty(piece)) {
                console.log(`Changed the key of ${piece} to ${newKey}!`)
                result[piece].key = newKey
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
        action = arr.shift()
    }

    // console.log(JSON.stringify(result, null, 2))

    let entries = Object.entries(result);
    for ( let token of entries){
        let info = Object.values(token[1]);
        console.log(`${token[0]} -> Composer: ${info[0]}, Key: ${info[1]}`)
    }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)
// solve([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]
// )