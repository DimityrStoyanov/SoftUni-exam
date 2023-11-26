function solve(arr) {

    let result = {}; // тук ще се съхранява инфорамция за градовете и ресурсите им.
    let info = arr.shift()

    while (info !== `Sail`) {
        let [city, population, gold] = info.split(`||`)

        if (result.hasOwnProperty(city)) {
            result[city][`population`] += Number(population)
            result[city][`gold`] += Number(gold)
        } else {
            let popAndGold = {
                population: Number(population),
                gold: Number(gold)
            };
            result[city] = popAndGold
        }

        info = arr.shift(); // За да се завърти цикъла.
    }
    // До тук се попълва информация за град, популация и злато.
    // Ако градът се повтаря, популацията и златото се натрупват.

    info = arr.shift()


    while (info !== `End`) {
        let token = info.split(`=>`);
        let action = token.shift();

        if (action == `Plunder`) {
            let [town, people, gold] = token;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            result[town][`population`] -= Number(people);
            result[town][`gold`] -= Number(gold);

            if (result[town][`population`] == 0 || result[town][`gold`] == 0) {
                console.log(`${town} has been wiped off the map!`);
                delete result[town];
            }

        } else if (action == `Prosper`) {
            let [town, gold] = token;
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`)

            } else {
                result[town][`gold`] += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${town} now has ${result[town][`gold`]} gold.`)
            }
        }
        info = arr.shift(); // За да се завърти цикъла.

    }
    let entries = Object.entries(result)

    if (entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`)
        for (let info of entries) {
            console.log(`${info[0]} -> Population: ${info[1][`population`]} citizens, Gold: ${info[1][`gold`]} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}
solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)
// solve((["Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"])
// )