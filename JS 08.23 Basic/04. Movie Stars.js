function movieStars(input) {
    let budget = Number(input[0]);
    let moneySpend = 0;
    let salary = 0;
    

    for ( let i = 1; i <input.length; i++){

        if ( budget >= moneySpend && input[i] === "ACTION"){
            console.log(`We are left with ${(budget - moneySpend).toFixed(2)} leva.`)
            break;
        }
        if ( input[i].length > 15){
            salary = (budget-moneySpend) * 0.20
            moneySpend += salary
        } else {
            i++;
            salary = Number(input[i])
            moneySpend += salary 
        }

        if( moneySpend > budget){
            console.log(`We need ${(moneySpend - budget).toFixed(2)} leva for our actors.`)
            break;
        } else {}

        
    }

}
movieStars(["600000",
"Michael Aniston",
"400000",
"Pamela Anderson",
"200010",
"ACTION"])

