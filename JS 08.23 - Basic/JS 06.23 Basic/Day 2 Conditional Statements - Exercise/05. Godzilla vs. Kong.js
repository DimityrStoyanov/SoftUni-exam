function godzillaVSkong(input){
    let budget = Number(input[0])
    let statists = Number(input[1])
    let moneyForCloth = Number(input[2])
    let cloths = statists *moneyForCloth
    let dekor = budget * 0.1

    if(statists > 150){
        cloths = cloths * 0.9
    } else {
    }
    let totalcost = dekor + cloths

    if (totalcost > budget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalcost - budget).toFixed(2)} leva more.`)

    } else {

       console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - totalcost).toFixed(2)} leva left.`)

    }


}
godzillaVSkong(["15437.62",
"186",
"57.99"])
