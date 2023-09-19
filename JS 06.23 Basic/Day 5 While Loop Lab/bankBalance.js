function bankBalance(input){
    let index = 0
    let money = input[index]
    index++
    let sum = 0

    while ( money !== "NoMoreMoney"){
        if ( money < 0){
            console.log(`Invalid operation!`)
            break;
        }
        sum = Number(money) + sum
        console.log(`Increase: ${Number(money).toFixed(2)}`)
       
        money = input[index]
        index++
    }

    console.log(`Total: ${sum.toFixed(2)}`)
}
bankBalance(["120",
"45.55",
"-150"])
