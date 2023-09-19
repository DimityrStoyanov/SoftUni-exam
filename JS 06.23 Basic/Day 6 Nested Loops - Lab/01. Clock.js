function solve(){
    for ( let hours = 0; hours < 24 ; hours ++){
       
        for (let min = 0; min < 60; min++){
            let hourandzero = ""
            if (hours < 10){
            hourandzero = "0"+ hours;
            } else {
                hourandzero = hours
            }

            let minandzero = "";
            if ( min < 10){
                minandzero = "0"+ min;
            } else {
                minandzero = min
            }
            console.log(`${hourandzero}:${minandzero}`)
        }
       
    }  
}
solve()