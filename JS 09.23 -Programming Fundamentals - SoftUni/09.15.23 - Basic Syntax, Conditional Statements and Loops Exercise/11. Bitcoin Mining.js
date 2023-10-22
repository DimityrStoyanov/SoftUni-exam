function bitcoin(arr) {
    ;
    let days = 0;
    let bitcoin = 0;
    let money = 0;
    let firstDay = 0;
    let input = []

    for (let i = 0; i < arr.length; i++) {
        days++
        let grams = arr[i];
        if (days % 3 == 0) {
            grams *= 0.70
        }
        let moneyFromGold = grams * 67.51;
        money += moneyFromGold
        if (money >= 11949.16) {
            firstDay = 1 + i
            input.push(firstDay)

            let countOfBitcoins = Math.floor(money / 11949.16)

            money -= 11949.16 * countOfBitcoins
            bitcoin += countOfBitcoins


        }


    }

    money = (money % 11949.16)

    console.log(`Bought bitcoins: ${bitcoin}`)
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${input[0]}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)

}
bitcoin([3124.15, 504.212, 2511.124])
// bitcoin([50, 100])
// bitcoin([100, 200, 300])