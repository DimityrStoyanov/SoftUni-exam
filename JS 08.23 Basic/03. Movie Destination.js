function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let pricePerDay = 0;

    switch (destination) {
        case `Dubai`:
            if (season == `Winter`) {
                pricePerDay = 45000;
            } else if (season == `Summer`) {
                pricePerDay = 40000;
            } else { }
            break;
        case `Sofia`:
            if (season == `Winter`) {
                pricePerDay = 17000;
            } else if (season == `Summer`) {
                pricePerDay = 12500;
            } else { }
            break;
        case `London`:
            if (season == `Winter`) {
                pricePerDay = 24000;
            } else if (season == `Summer`) {
                pricePerDay = 20250;
            } else { }
            break;
    }

    let totalCost = pricePerDay * days

    if (destination == `Dubai`){
        totalCost = totalCost * 0.7;
    } else if ( destination == `Sofia`){
        totalCost = totalCost * 1.25;
    } else{}

    if (totalCost <= budget){
        console.log(`The budget for the movie is enough! We have ${(budget - totalCost).toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${(totalCost - budget).toFixed(2)} leva more!`)
    }
}
movieDestination(["400000",
"Sofia",
"Winter",
"20"])
// 1. Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
// 2. Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
// 3. Сезон – текст, с възможности "Summer" и "Winter"
// 4. Брой дни – цяло число в диапазона [1… 40]