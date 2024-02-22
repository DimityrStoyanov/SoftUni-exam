function filmPremier (input){
    let movie = input[0];
    let packeg =  input[1];
    let ticketsCount = Number(input[2]);
    let money = 0

    switch (movie){
        case `John Wick`: 
            switch(packeg){
                case `Drink`: money = 12; break;
                case `Popcorn`: money = 15; break;
                case `Menu`: money = 19; break;
                default:
        }
        break;
        case "Star Wars":
            switch(packeg){
                case `Drink`: money = 18; break;
                case `Popcorn`: money = 25; break;
                case `Menu`: money = 30; break;
                default:
            }
        break;
        case `Jumanji`: 
            switch(packeg){
                case `Drink`: money = 9; break;
                case `Popcorn`: money = 11; break;
                case `Menu`: money = 14; break;
                default:
            }
        break;
        default:
    }

let totalMoneyNeeded = money * ticketsCount

if ( movie == `Star Wars` && ticketsCount >= 4){
    totalMoneyNeeded = totalMoneyNeeded * 0.7;
} else if ( movie == `Jumanji` && ticketsCount == 2){
    totalMoneyNeeded = totalMoneyNeeded * 0.85;
} else {

}
console.log(`Your bill is ${totalMoneyNeeded.toFixed(2)} leva.`)
}
filmPremier(["Jumanji",
"Menu",
"2"])