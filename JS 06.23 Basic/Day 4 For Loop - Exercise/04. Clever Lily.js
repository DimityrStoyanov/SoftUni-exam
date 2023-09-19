function cleverLily(input){
    let ages = Number(input[0]);
    let washmashine = Number(input[1]);
    let priceOfToy = Number(input[2]);

    let moneyNeeded = 0
    let birthdaysWON = 10

    for ( let i = 1; i <= ages; i ++){
        if (i % 2 === 0){
            moneyNeeded = birthdaysWON
            moneyNeeded -= 1
            birthdaysWON += 10
        } else {
            moneyNeeded += priceOfToy
        }
    }
   if (moneyNeeded >= washmashine){
    let moneyleft = moneyNeeded - washmashine
    console.log(`Yes! ${moneyleft}`)
   }else {
    console.log(`Yes! `)
   }
}
cleverLily(["20",
"170.00",
"6"])
