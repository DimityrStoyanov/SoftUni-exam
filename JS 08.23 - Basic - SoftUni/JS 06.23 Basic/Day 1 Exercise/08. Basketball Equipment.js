function basketballEquip(input){
    let tax = Number(input[0]);
    let shoes = tax * 0.6
    let outfit = shoes * 0.8
    let ball = outfit * 0.25
    let acsesoares = ball * 0.20
    
    totalCost = tax + shoes + outfit + ball + acsesoares
    console.log(totalCost)

}
basketballEquip(["365 "])
// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
