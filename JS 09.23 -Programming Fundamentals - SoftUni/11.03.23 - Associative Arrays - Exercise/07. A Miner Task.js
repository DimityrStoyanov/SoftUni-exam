function solve(arr) {
    let result = {}
    for (let i = 0; i < arr.length; i++) {
        let resource = arr[i]
        i++
        let quantity = Number(arr[i])
        if (resource in result) {
            result[resource] += quantity
        } else {
            result[resource] = quantity
        }

    }
    let entries = Object.entries(result)
    for (let [resource, quantity] of entries) {
        console.log(`${resource} -> ${quantity}`);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)