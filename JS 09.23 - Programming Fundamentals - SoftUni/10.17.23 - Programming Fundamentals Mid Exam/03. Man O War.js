function solve(arr) {
    let piratShipStatus = arr.shift().split(`>`)
    let warshipStatus = arr.shift().split(`>`)
    let maxHP = arr.shift()
    let sectorsForRepair = 0;
    let retireOrNot = 0;
    let win = 0;
    let lost = 0;



    for (let action of arr) {
        let currentAction = action.split(` `)
        let command = currentAction.shift()
        switch (command) {
            case `Fire`:
                let index = Number(currentAction.shift())
                if (index > warshipStatus.length) {
                    continue
                }
                let dmg = Number(currentAction.shift())
                let currentHP = warshipStatus[index]
                let newHP = currentHP - dmg
                warshipStatus[index] = newHP
                if (warshipStatus[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    win++
                }
                ; break;
            case `Defend`:
                let startIndex = Number(currentAction.shift())
                let endIndex = Number(currentAction.shift())
                let damage = Number(currentAction.shift())
                if (endIndex > piratShipStatus.length) {
                    continue
                }
                for (let i = startIndex; i <= endIndex; i++) {
                    piratShipStatus[i] = Number(piratShipStatus[i]) - damage
                    if (piratShipStatus[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        lost++
                        return
                    }
                }
                ; break;
            case `Repair`:
                let indexForRep = Number(currentAction.shift())
                let repHP = Number(currentAction.shift())
                if (piratShipStatus[indexForRep] + repHP > 70) {
                    piratShipStatus[indexForRep] = 70;
                } else {
                    piratShipStatus[indexForRep] = piratShipStatus[indexForRep] + repHP
                }
                ; break;
            case `Status`:
                for (let currentStatus of piratShipStatus) {
                    let maximumHP = maxHP * 0.2
                    if (maximumHP > currentStatus) {
                        sectorsForRepair++
                    }

                }
                console.log(`${sectorsForRepair} sections need repair.`);
                break;
            // case `Retire`:
            // let sumOfPirate = 0;
            // let sumOfWarship = 0;
            // retireOrNot++
            // for (let sumsOne of piratShipStatus) {
            //     sumOfPirate += Number(sumsOne)
            // }

            // for (let sumsTwo of warshipStatus) {
            //     sumOfWarship += Number(sumsTwo)
            // }

            // console.log(`Pirate ship status: ${sumOfPirate}`);
            // console.log(`Warship status: ${sumOfWarship}`);
            // ; break;

        }
    }
    if (win < 1 && lost <1) {
        let sumOfPirate = 0;
        let sumOfWarship = 0;
        for (let sumsOne of piratShipStatus) {
            sumOfPirate += Number(sumsOne)
        }

        for (let sumsTwo of warshipStatus) {
            sumOfWarship += Number(sumsTwo)
        }

        console.log(`Pirate ship status: ${sumOfPirate}`);
        console.log(`Warship status: ${sumOfWarship}`);
    }
}
solve(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])

solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])


