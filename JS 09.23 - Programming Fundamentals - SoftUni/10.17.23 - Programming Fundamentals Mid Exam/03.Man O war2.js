function solve(arr) {
    let piratShipStatus = arr.shift().split(`>`).map(Number);
    let battleShipStatus = arr.shift().split(`>`).map(Number);
    let maxHealth = Number(arr.shift())

    for (let action of arr) {
        let splitAction = action.split(` `)
        let command = splitAction.shift()
        let index = 0;
        let dmg = 0;

        if (command == `Fire`) {
            index = Number(splitAction.shift())
            dmg = Number(splitAction.shift())
            if (index >= battleShipStatus.length) {
                continue
            }
            battleShipStatus[index] = Number(battleShipStatus[index]) - dmg
            if (battleShipStatus[index] <= 0) {
                console.log(`You won! The enemy ship has sunken.`);
                return
            }
        } else if (command == `Defend`) {
            index = Number(splitAction.shift())
            let endIndex = Number(splitAction.shift())
            dmg = Number(splitAction.shift())
            if (index < 0) {
                continue
            } else if (endIndex >= piratShipStatus.length ) {
                continue
            }
            for (let i = index; i <= endIndex; i++) {
                piratShipStatus[i] = Number(piratShipStatus[i]) - dmg
                if (piratShipStatus[i] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return
                }
            }

        } else if (command == `Repair`) {
            index = Number(splitAction.shift())
            health = Number(splitAction.shift())
            if (index >= piratShipStatus.length) {
                continue
            }
            piratShipStatus[index] = piratShipStatus[index] + health
            if (piratShipStatus[index] > maxHealth) {
                piratShipStatus[index] = maxHealth
            }
        } else if (command == `Status`) {
            let repairSoon = maxHealth * 0.2;
            let sectionForRepair = 0;
            for (let section of piratShipStatus) {
                if (repairSoon > section) {
                    sectionForRepair++
                }
            }
            console.log(`${sectionForRepair} sections need repair.`);
        } else {
            let pirateShipSum = 0;
            let warshipSum = 0;
            for (let section of piratShipStatus) {
                pirateShipSum += section
            }
            for (let section2 of battleShipStatus) {
                warshipSum += section2
            }
            console.log(`Pirate ship status: ${pirateShipSum} \nWarship status: ${warshipSum}`)

        }
    }
}
solve([
    "2>3>4>5>2",
    "6>7>8>9>10>11>",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
])
