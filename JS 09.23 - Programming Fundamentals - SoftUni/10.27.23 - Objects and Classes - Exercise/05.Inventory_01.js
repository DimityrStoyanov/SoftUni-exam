function solve(arr) {
    let champion;
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
        print() {
            console.log(`Hero: ${this.name}`)
            console.log(`level => ${this.level}`)
            console.log(`items => ${this.items}`)
        }
    }
    for (let tokes of arr) {
        let information = tokes.split(` / `);
        let name = information.shift()
        let level = Number(information.shift())
        let items = information.shift()
        champion = new Hero(name, level, items)
        champion.print()
        
    }

    console.log(champion);

}
// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]
// )
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )