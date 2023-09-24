function vacation(group, type, day){
    let price = 0;
    switch(type){
        case `Students`:
            if (day == `Friday`){
                price = 8.45
            } else if ( day == `Saturday`){
                price = 9.80
            }else if ( day == `Sunday`){
                price = 10.46
            }
        ;break;
        case `Business`:
            if (day == `Friday`){
                price = 10.90
            } else if ( day == `Saturday`){
                price = 15.60
            }else if ( day == `Sunday`){
                price = 16
            }
        ;break;
        case `Regular`: 
        if (day == `Friday`){
            price = 15
        } else if ( day == `Saturday`){
            price = 20
        }else if ( day == `Sunday`){
            price = 22.50
        }
        ;break;
    }

   let totalPrice = price * Number(group)
    if (type == `Students` && group >= 30){
        totalPrice *= 0.85
    }else if (type == `Business` && group >= 100){
        let discounted = 10 * price;
        totalPrice -= discounted
    } else if ( type = `Regular` && (group >= 10 && group <= 20)){
        totalPrice *= 0.95
    }

   console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(1,"Students","Friday")
vacation(1,"Students","Saturday")
vacation(1,"Students","Sunday")
vacation(1,"Business","Friday")
vacation(1,"Business","Saturday")
vacation(1,"Business","Sunday")
vacation(1,"Regular","Friday")
vacation(1,"Regular","Saturday")
vacation(1,"Regular","Sunday")