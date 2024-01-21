function solve(arr) {
    let result = [];
    for (let tokens of arr) {
        let [hero, level, weapons] = tokens.split(` / `);
        level = Number(level);
        let obejct = {};
        obejct.name = hero
        obejct.level = level
        obejct.items = weapons ? weapons.split(`, `): []
        result.push(obejct)
    }
    let resultToJson = JSON.stringify(result) 
    return resultToJson
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))
console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']))
console.log(solve([`Dimitar / 5000 / MoshtenGun`]))