function solve(arr) {
    let result = {};
    for (let info of arr) {
        let token = info.split(` -> `)
        let name = token.slice(0, token.length - 1)
        let personalId = token.slice(token.length - 1)
        if (name in result) {
            result[name].push(...personalId)
        } else {
            result[name] = personalId
        }
    }

    let entries = Object.entries(result).sort()
    for ( let [companyName, personalID] of entries){
        console.log(companyName);
        let unique = new Set(personalID)
        for ( let id of unique){
            console.log(`-- ${id}`)
        }
    }



}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)
// solve([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
// ]
// )