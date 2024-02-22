function club(input){
    let target = Number(input[0]);
    let index = 1;
    let totalMoney = 0
    let money = 0
    let price = 0

    while (input[index] !== "Party!") {
        money = Number((input[index]).length)
        index ++
        price = Number(money) * input[index]
        if (price % 2 !== 0){
            price = price * 0.75
        }
        totalMoney += price
        
        index ++
        if ( totalMoney >= target){
            console.log("Target acquired.")
            console.log(`Club income - ${totalMoney.toFixed(2)} leva.`)
            break;
        }
        
        
        }
        if (target > totalMoney){
            console.log(`We need ${(target - totalMoney).toFixed(2)} leva more.`)
            console.log(`Club income - ${totalMoney.toFixed(2)} leva.`)

    }


    
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])


