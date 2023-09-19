function newHouse(input){
    let typeOfFlower = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0

    switch(typeOfFlower){
        case "Roses":
            if(numberOfFlowers > 80){
                price = 5 * 0.9
            } else {
                price = 5
            }
            break;
        case "Dahlias":
            if(numberOfFlowers > 90){
                price = 3.80 * 0.85
            } else {
                price = 3.80
            }
            break;
        case "Tulips":
            if(numberOfFlowers > 80){
                price = 2.80 * 0.85
            } else {
                price = 2.80
            }
            break;
        case "Narcissus":
            if(numberOfFlowers < 120){
                price = 3 * 1.15
            } else {
                price = 3
            }
            break;
        case "Gladiolus":
            if(numberOfFlowers < 80){
                price = 2.50 * 1.20
            } else {
                price = 2.50
            }
            break;
        
    }
    let moneyNeeded = price * numberOfFlowers
    if(moneyNeeded <= budget){
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlower} and ${(budget - moneyNeeded).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(moneyNeeded - budget).toFixed(2)} leva more.`)
    }
}
newHouse(["Narcissus",
"120",
"360"])



// •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// •	Брой цветя - цяло число в интервала [10…1000]
// •	Бюджет - цяло число в интервала [50…2500]
