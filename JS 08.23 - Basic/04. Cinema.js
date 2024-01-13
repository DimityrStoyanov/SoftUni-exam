function cinema(input) {
    let capacity = Number(input[0]);
    let totalVisitors = 0;
    let ticketPrice = 5;
    let totalMoneyAcc = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] % 3 === 0) {
            totalMoneyAcc = totalMoneyAcc + (ticketPrice * input[i] - 5)
        } else {
            totalMoneyAcc = totalMoneyAcc + (ticketPrice * input[i])
        }
        if (totalVisitors > capacity) {
            console.log("The cinema is full.")
            console.log(`Cinema income - ${totalMoneyAcc} lv.`)
        } else if ((input[i]) == "Movie time!"){
            console.log(`There are ${capacity - totalVisitors} seats left in the cinema.`)
            console.log(`Cinema income - ${totalMoneyAcc} lv.`)
        }
        totalVisitors = totalVisitors + Number(input[i]);
       

    }
  

}
cinema(["50",
"15",
"10",
"10",
"15",
"5"])