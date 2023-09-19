function toyShop(input){
    let tripPrice = Number(input[0]);
    let pizles = Number(input[1]);
    let kukla = Number(input[2]);
    let meche = Number(input[3]);
    let minion = Number(input[4]);
    let kamion = Number(input[5]);

    let totalNMB = pizles + kukla + meche + minion + kamion
    let totalProfit = pizles*2.60 + kukla*3 + meche*4.10 + minion*8.20 + kamion*2

    if (totalNMB >= 50) {
        totalProfit = totalProfit * 0.75
        totalProfit = totalProfit * 0.9
    } else {
        totalProfit = totalProfit * 0.9
    }

    if (totalProfit >= tripPrice) {
        let moneyLeft = totalProfit - tripPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = tripPrice - totalProfit
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }

}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])


