function cinema(input){
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let price = 0

    switch(type){
        case "Premiere":
            price = 12.00;
            break;
        case "Normal":
            price = 7.50;
            break;
        case "Discount":
            price = 5.00;
            break;
    }
    
   console.log(`${(r * c * price).toFixed(2)}`)
}
cinema(["Normal",
"21",
"13"])
