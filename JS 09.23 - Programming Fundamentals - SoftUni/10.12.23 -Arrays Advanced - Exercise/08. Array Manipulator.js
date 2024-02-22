function solve(arr, manipulation) {
    let result = [];

    while (manipulation.length > 0) {
        let currentAction = manipulation.shift().split(` `)
        action = currentAction.shift()
        switch (action) {
            case `add`:
                let index = Number(currentAction.shift())
                let element = Number(currentAction.shift())
                arr.splice(index, 0, element)
                ; break
            case `addMany`:
                let index1 = currentAction.shift()
                while (currentAction.length > 0) {
                    let currentNum = Number(currentAction.pop())
                    arr.splice(index1, 0, currentNum)
                }
                ; break
            case `contains`:
                let lookingNum = Number(currentAction.shift())
                let lookingIndex = arr.indexOf(lookingNum)
                console.log(lookingIndex);
                
                    ; break
            case `remove`:
                let remove = Number(currentAction.shift())
                arr= arr.filter(element => element !== arr[remove])
                ; break
            case `shift`:
                let shiftedNums = Number(currentAction.shift())
                for ( let i = 0; i < shiftedNums; i++){
                    let firstNum = arr.shift()
                    arr.push(firstNum)
                }
                ; break
            case `sumPairs`:
                let pairs = []
                for ( let i = 0; i < arr.length; i+= 2){
                    if ( i + 1 < arr.length){
                    pairs.push(Number(arr[i]) + Number(arr[i + 1]))
                    } else {
                        pairs.push(Number(arr[i]))
                    }
                }
                arr = pairs
                
                ; break
            case `print`:
                console.log(`[ ${arr.join(`, `)} ]`)
                ; break
                break;
        }

    }

}
// solve(
//     [1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// )
solve(
    [1, 2, 3, 4, 5],
    // ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print', `sumPairs`]
    [`sumPairs`, `print`]
)