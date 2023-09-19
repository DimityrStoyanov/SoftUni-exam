function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let rent = 0

    switch(season){
        case "Spring":
            if(fishermans < 6){
                rent = 3000 * 0.9
            } else if(fishermans >=6 && fishermans <= 11){
                rent = 3000 * 0.85
            } else if( fishermans >= 12){
                rent= 3000 * 0.75
            } else {}
            break;
        case "Summer":
            if(fishermans < 6){
                rent = 4200 * 0.9
            } else if(fishermans >=6 && fishermans <= 11){
                rent = 4200 * 0.85
            } else if( fishermans >= 12){
                rent= 4200 * 0.75
            } else {}
            break;
        case "Autumn":
            if(fishermans < 6){
                rent = 4200 * 0.9
            } else if(fishermans >=6 && fishermans <= 11){
                rent = 4200 * 0.85
            } else if( fishermans >= 12){
                rent= 4200 * 0.75
            } else {}
            break;
        case "Winter":
            if(fishermans < 6){
                rent = 2600 * 0.9
            } else if(fishermans >=6 && fishermans <= 11){
                rent = 2600 * 0.85
            } else if( fishermans >= 12){
                rent= 2600 * 0.75
            } else {}
            break;
    }
if(fishermans % 2 === 0 && season !== "Autumn"){
    rent = rent * 0.95
} else {
    rent = rent
}

if(budget >= rent){
    console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`)
} else{
    console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva."`)
}
}
fishingBoat(["3600",
"Autumn",
"6"])


// •	Бюджет на групата – цяло число в интервала [1…8000]
// •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
// •	Брой рибари – цяло число в интервала [4…18]
