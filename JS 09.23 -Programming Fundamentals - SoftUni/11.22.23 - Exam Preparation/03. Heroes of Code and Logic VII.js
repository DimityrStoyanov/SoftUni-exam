function solve(arr) {
    let heroesNum = Number(arr.shift());
    let result = {};

    for (let i = 0; i < heroesNum; i++) {
        let heroInfo = arr.shift();
        let [name, hp, mp] = heroInfo.split(` `)
        let hero = {
            hp: Number(hp),
            mp: Number(mp)
        }
        result[name] = hero
    }
    let i = 0
    while (arr[i] !== `End`) {
        let tokens = arr[i].split(` - `)
        let [command, hero, num, spellOrAtack] = tokens
        switch (command) {
            case `CastSpell`:
                if (result[hero][`mp`] >= num) {
                    result[hero][`mp`] -= num
                    console.log(`${hero} has successfully cast ${spellOrAtack} and now has ${result[hero][`mp`]} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellOrAtack}!`)
                }
                ; break;
            case `TakeDamage`:
                if (result[hero][`hp`] > Number(num)) {
                    result[hero][`hp`] -= Number(num)
                    console.log(`${hero} was hit for ${num} HP by ${spellOrAtack} and now has ${result[hero][`hp`]} HP left!`)
                } else if (result[hero][`hp`] <= Number(num)) {
                    console.log(`${hero} has been killed by ${spellOrAtack}!`)
                    delete result[hero]
                }
                ; break;

            //Стигнали сме до тук, като първите две команди са преминати.
            //Не са засягани никакви гранични случаи.

            case `Recharge`:
                if (result[hero][`mp`] + Number(num) > 200) {
                    let recherge = 200 - result[hero][`mp`]
                    result[hero][`mp`] = 200
                    console.log(`${hero} recharged for ${recherge} MP!`)
                } else {
                    result[hero][`mp`] = result[hero][`mp`] + Number(num)
                    console.log(`${hero} recharged for ${num} MP!`)
                }
                ; break;
            case `Heal`:
                if (result[hero][`hp`] + Number(num) > 100) {
                    let healed = 100 - result[hero][`hp`]
                    result[hero][`hp`] = 100
                    console.log(`${hero} healed for ${healed} HP!`)
                } else {
                    result[hero][`hp`] = result[hero][`hp`] + Number(num)
                    console.log(`${hero} healed for ${num} HP!`)
                }
                ; break;
        }
        i++
    }

    let entries = Object.entries(result)

    for (let info of entries) {
        console.log(info[0])
        console.log(`  HP: ${info[1][`hp`]}`)
        console.log(`  MP: ${info[1][`mp`]}`)
    }
}
solve([`2`,
    `Solmyr 85 120`,
    `Kyrre 99 50`,
    `Heal - Solmyr - 10`,
    `Recharge - Solmyr - 50`,
    `TakeDamage - Kyrre - 66 - Orc`,
    `CastSpell - Kyrre - 15 - ViewEarth`,
    `End`]
)

// solve([`4`,
//     `Adela 90 150`,
//     `SirMullich 70 40`,
//     `Ivor 1 111`,
//     `Tyris 94 61`,
//     `Heal - SirMullich - 50`,
//     `Recharge - Adela - 100`,
//     `CastSpell - Tyris - 1000 - Fireball`,
//     `TakeDamage - Tyris - 99 - Fireball`,
//     `TakeDamage - Ivor - 3 - Mosquito`,
//     `End`
// ])