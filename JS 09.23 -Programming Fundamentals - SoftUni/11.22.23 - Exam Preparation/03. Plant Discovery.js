function solve(arr) {
    let numOfPlant = Number(arr.shift());
    let result = {};
    for (let i = 0; i < numOfPlant; i++) {
        let token = arr.shift();
        let [plant, rarity] = token.split(`<->`)
        let info = {
            rarity: Number(rarity),
            rating: 0,
            countOfRating: 0
        }
        result[plant] = info
    }

    let action = arr.shift();

    while (action !== `Exhibition`) {
        let tokens = action.split(`: `);
        let command = tokens.shift();


        if (command == `Rate`) {
            let [plant, rating] = tokens.join().split(` - `)
            if (result.hasOwnProperty(plant)) {
                result[plant].rating += Number(rating)
                result[plant].countOfRating++
            } else {
                console.log(`error`)
               
            }

        } else if (command == `Update`) {
            let [currentPlant, currentRarity] = tokens.join().split(` - `)
            if (result.hasOwnProperty(currentPlant)) {
                result[currentPlant].rarity = Number(currentRarity)
            } else {
                console.log(`error`)
               
            }

        } else if (command == `Reset`) {
            let currentPlant = tokens.shift()
            if (result.hasOwnProperty(currentPlant)) {
                result[currentPlant].rating = 0
            } else {
                console.log(`error`)
                
            }

        }
        action = arr.shift();
    }



    let entries = Object.entries(result);

    
        console.log(`Plants for the exhibition:`);
        for (let token of entries) {
            let plantName = token.shift()
            let averigeRating = result[plantName].rating / result[plantName].countOfRating
            console.log(`- ${plantName}; Rarity: ${result[plantName].rarity}; Rating: ${averigeRating.toFixed(2)}`)
        }
    
}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Mitko - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 8",
"Reset: Arnoldii",
"Exhibition"])
