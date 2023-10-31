function solve(arr) {
    let result = {};

    for (let tokens of arr) {
        let currentInfo = tokens.split(` / `)
        let hero = currentInfo.shift()
        let level = Number(currentInfo.shift())
        let items = currentInfo

        let obj = {
            name: hero,
            level: level,
            items: items
        }
        result[hero] = obj
    }
    console.log(result);

}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)
// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]
// )