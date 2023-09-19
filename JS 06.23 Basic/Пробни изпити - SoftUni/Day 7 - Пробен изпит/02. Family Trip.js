function familyTrip(input){
    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let day = input[2];

    let fuelPrice = fuelNeeded * 2.10
    let totalMoneyNeeded = fuelPrice + 100
    
    if ( day == "Saturday"){
        totalMoneyNeeded = 0.9 * totalMoneyNeeded
    } else if ( day == "Sunday"){
        totalMoneyNeeded = 0.8 * totalMoneyNeeded
    } else {}
   
    if ( totalMoneyNeeded >= budget){
        console.log(`Safari time! Money left: ${(totalMoneyNeeded - budget).toFixed(2)} lv. `)
    } else {
        console.log(`Not enough money! Money needed: ${(budget - totalMoneyNeeded ).toFixed(2)} lv.`)
    }
    

}
familyTrip(["105.20",
"15",
"Sunday"])




// •	Бюджет – реално число в интервала [0.00… 10000.00]
// •	Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
// •	Ден от седмицата – текст с възможности "Saturday" и "Sunday" 
// •	Цената на един литър гориво е 2.10 лв.
// •	Цената за екскурзовод е 100лв.
// •	В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%

