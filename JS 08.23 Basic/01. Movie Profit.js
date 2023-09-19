function movieProfit(input){
    
    let name = input[0]
    let days = Number(input[1])
    let tickets = Number(input[2])
    let priceOfTicket = Number(input[3])
    let percantForCinema = Number(input[4])

    let profit = (days * tickets * priceOfTicket) * ( (100 - percantForCinema)/100)
    console.log(`The profit from the movie ${name} is ${profit.toFixed(2)} lv.`)


}
movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"])


// 1. Име на филм - текст
// 2. Брой дни - цяло число в диапазона [1… 90]
// 3. Брой билети - цяло число в диапазона [100… 100000]
// 4. Цена на билет - реално число в диапазона [5.0… 25.0]
// 5. Процент за киното - цяло число в диапазона [5... 35]
