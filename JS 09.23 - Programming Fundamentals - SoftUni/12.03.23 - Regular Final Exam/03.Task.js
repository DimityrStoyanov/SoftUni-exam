function solve(arr) {
    let result = {};
    let countOfUnliked = 0;
    let commands = arr.shift();
    while (commands !== "Stop") {
        let [likeOrNot, guest, meal] = commands.split(`-`)
        let info = {
            [meal]: meal
        }

        if (likeOrNot == "Like") {
            if ((result).hasOwnProperty(guest)) {
                result[guest][meal] = meal

            } else {
                result[guest] = info
            }
        } else if (likeOrNot == "Dislike") {
            if (!result.hasOwnProperty([guest])) {
                console.log(`${guest} is not at the party.`)
            }
            else if (result[guest][meal] == meal) {

                console.log(`${guest} doesn't like the ${meal}.`)
                countOfUnliked++
                delete result[guest][meal]
            } else if (!result.hasOwnProperty([guest][meal])) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
            }

        }

        commands = arr.shift();
    }

    let entries = Object.entries(result)

    for (let tokens of entries) {
        let guest = tokens[0]
        let info = tokens[1]
        let keys = Object.keys(info)
        console.log(`${guest}: ${keys.join(`, `)}`);
    }

    console.log(`Unliked meals: ${countOfUnliked}`)
}
solve(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"])

solve(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"])

solve(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])
