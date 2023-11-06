function solve(arr) {
    let listArr = [];
    let guessArr = [];
    let stop = `PARTY`
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== `PARTY`) {
            let guess = arr.shift()
            listArr.push(guess)
        }

    }
    arr.shift()
   let result = {}
    for ( let guess of listArr){
        result[guess] = 1
    }

    for ( let guess of arr){
        if ( guess in result){
            delete result[guess]
        }
    }
    let arr1 = Object.keys(result)
    console.log(arr1.length);
    for(let asd of arr1){
        console.log(asd);
    }

    

}
// solve(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]
// )
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)