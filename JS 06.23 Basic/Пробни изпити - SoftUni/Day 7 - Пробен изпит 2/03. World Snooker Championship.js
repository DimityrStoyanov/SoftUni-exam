function worldSnookerChampionship(input) {
    let stage = input[0];
    let ticketType = input[1];
    let ticketNumbers = Number(input[2]);
    let picture = input[3];

    let price = 0;
    let moneyForPicture = 0

    if (stage == "Quarter final") {
        switch (ticketType) {
            case "Standard": price = 55.50; break;
            case "Premium": price = 105.20; break;
            case "VIP": price = 118.90; break;
            default:
        }
    } else if (stage == "Semi final") {
        switch (ticketType) {
            case "Standard": price = 75.88; break;
            case "Premium": price = 125.22; break;
            case "VIP": price = 300.40; break;
            default:
        }
    } else if (stage == "Final") {
        switch (ticketType) {
            case "Standard": price = 110.10; break;
            case "Premium": price = 160.66; break;
            case "VIP": price = 400; break;
            default:
        }
    } else { }

 

    let totalCost = price * ticketNumbers

    if ( totalCost > 4000){
        console.log(`${(totalCost * 0.75).toFixed(2)}`)
    } else if ( totalCost > 2500 && picture == "Y"){
        console.log(`${(totalCost * 0.90 + 40*ticketNumbers).toFixed(2)}`)
    } else if (totalCost > 2500 && picture == "N"){
        console.log(`${(totalCost * 0.90).toFixed(2)}`)
    }else if (picture == "Y"){
        console.log(`${(totalCost+40*ticketNumbers).toFixed(2)}`)
    } else {
        console.log(`${totalCost.toFixed(2)}`)
    }


}
worldSnookerChampionship(["Semi final",
"VIP",
"9",
"Y"])

// 1. Етап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
// 2. Вид на билета – текст - “Standard”, “Premium” или “VIP”
// 3. Брой билети – цяло число в интервала [1 … 30]
// 4. Снимка с трофея – символ – 'Y' (да) или 'N' (не)