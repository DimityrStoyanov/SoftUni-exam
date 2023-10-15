function summerOutfit(input){
    let degrees = Number(input[0]);
    let time = input[1];
    let outfit = 0
    let shoes = 0

    switch(time){
        case "Morning":
            if(degrees >= 10 && degrees <= 18){
                outfit = "Sweatshirt"
                shoes = "Sneakers"
            } else if(degrees > 18 && degrees <= 24){
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if ( degrees >= 25){
                outfit = "T-Shirt"
                shoes = "Sandals"
            } else {}
            break;
        case "Afternoon":
            if(degrees >= 10 && degrees <= 18){
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if(degrees > 18 && degrees <= 24){
                outfit = "T-Shirt"
                shoes = "Sandals"
            } else if ( degrees >= 25){
                outfit = "Swim Suit"
                shoes = "Barefoot"
            } else {}
            break;
        case "Evening":
            if(degrees >= 10 && degrees <= 18){
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if(degrees > 18 && degrees <= 24){
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if ( degrees >= 25){
                outfit = "Shirt"
                shoes = "Moccasins"
            } else {}
            break;
    }
console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["28",
"Evening"])

// •	Градусите - цяло число в интервала [10…42]
// •	Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"
// Да се отпечата на конзолата на един ред: "It's {градуси} degrees, get your {Outfit} and {Shoes}."