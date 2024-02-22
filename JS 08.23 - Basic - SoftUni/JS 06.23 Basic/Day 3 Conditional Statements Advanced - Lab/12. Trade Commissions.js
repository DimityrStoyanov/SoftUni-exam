function tradeCommissions(input){
    let city = input[0];
    let trade = Number(input[1]);
    let commission = 0
    
        switch(city){
            case "Sofia":
                if(trade >= 0 && trade <= 500) {
                    commission = 0.05
                } else if ( trade > 500 && trade <= 1000){
                    commission = 0.07
                } else if ( trade > 1000 && trade <= 10000){
                    commission = 0.08
                } else if ( trade > 10000 ){
                    commission = 0.12
                }else {
                    commission = `error`
                }
            break;

            case "Varna":
                if(trade >= 0 && trade <= 500) {
                    commission = 0.045
                } else if ( trade > 500 && trade <= 1000){
                    commission = 0.075
                } else if ( trade > 1000 && trade <= 10000){
                    commission = 0.10
                } else if ( trade > 10000 ){
                    commission = 0.13
                }else {
                    commission = `error`
                }
            break;

            case "Plovdiv":
                if(trade >= 0 && trade <= 500) {
                    commission = 0.055
                } else if ( trade > 500 && trade <= 1000){
                    commission = 0.08
                } else if ( trade > 1000 && trade <= 10000){
                    commission = 0.12
                } else if ( trade > 10000 ){
                    commission = 0.145
                } else {
                    commission = `error`
                }
            break;


            
        }
        if(commission == `error`){
            console.log(`error`)
        } else {
            console.log(`${(commission * trade).toFixed(2)} `)
        }
    
    
}
tradeCommissions(["Plovdiv",
"499.99"])

