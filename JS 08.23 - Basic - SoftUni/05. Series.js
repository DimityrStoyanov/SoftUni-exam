function series(input) {
    let budget = Number(input[0]);
    let numberOfSerials = Number(input[1]);
    let priceOfSerials = 0;
    let totalMoneyNeeded = 0;
    let name = ""

    for (let i = 2; i < input.length; i++) {
        name = input[i];
        i++
        switch (name) {
            case `Thrones`: priceOfSerials = input[i] * 0.5; break;
            case `Lucifer`: priceOfSerials = input[i] * 0.6; break;
            case `Protector`: priceOfSerials = input[i] * 0.7; break;
            case `TotalDrama`: priceOfSerials = input[i] * 0.8; break;
            case `Area`: priceOfSerials = input[i] * 0.9; break;
            default: priceOfSerials = Number(input[i]);
        }
        totalMoneyNeeded += priceOfSerials
    }
    if (budget >= totalMoneyNeeded) {
        console.log(`You bought all the series and left with ${(budget - totalMoneyNeeded).toFixed(2)} lv.`)
    } else {
        console.log(`You need ${(totalMoneyNeeded - budget).toFixed(2)} lv. more to buy the series!`)
    }

}
series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])
