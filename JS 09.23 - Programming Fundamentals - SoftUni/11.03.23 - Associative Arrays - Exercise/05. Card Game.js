function solve(arr) {
    let result = {};
    let power = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 }
    let value = { S: 4, H: 3, D: 2, C: 1 }
    for (let gamers of arr) {
        let asd = gamers.split(`: `)
        let names = asd[0]
        let cards = asd[1].split(`, `)

        if (names in result) {
            result[names].push(...cards)
        }
        else {
            result[names] = cards
        }

    }

    let entries = Object.entries(result)

    for (let [name, deck] of entries) {
        let sum = 0;
        let uniq = new Set(deck)
        for (let card of uniq) {
            let cardPower = card.slice(0, card.length - 1)
            let cardValue = card[card.length - 1]
            sum += power[cardPower] * value[cardValue]
        }
        console.log(`${name}: ${sum}`);
    }


}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)