function fruitShop(input){
    let fruit = (input[0]);
    let day = input[1];
    let quantity = Number(input[2]);
    let sum = 0

    switch(day){
        case `Monday`: 
        case `Tuesday`:
        case `Wednesday`:
        case `Thursday`:
        case `Friday`: 
            switch(fruit){
            case `Banana`:sum = quantity * 2.50; break;
            case `Apple`:sum = quantity * 1.20; break;
            case `Organge`:sum = quantity * 0.85; break;
            case `Grapefruit`:sum = quantity * 1.45; break;
            case `Kiwi`:sum = quantity * 2.70; break;
            case `Pineapple`:sum = quantity * 5.50; break;
            case `Grapes`: sum = quantity * 3.85; break;
            default: console.log(`Error`)
            break;
    }   case `Saturday`:
        case `Sunday`:
            switch(fruit){
                case `Banana`:sum = quantity * 2.70; break;
                case `Apple`:sum = quantity * 1.25; break;
                case `Organge`:sum = quantity * 0.90; break;
                case `Grapefruit`:sum = quantity * 1.60; break;
                case `Kiwi`:sum = quantity * 3.00; break;
                case `Pineapple`:sum = quantity * 5.60; break;
                case `Grapes`: sum = quantity * 4.20; break;
                default: console.log(`Error`)
            }
            break;
        default: console.log(`Error`)
     
    }
    console.log(sum)
}

fruitShop(["apple",
"Tuesday",
"2"])




//:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes)
//ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
//количество (число) 