function repainting (input){
    let naylon = Number(input[0]) + 2;
    let paint = Number(input[1]) * 1.1;
    let razreditel = Number(input[2]);
    let hoursForWork = Number(input[3]);
    let priceForNaylon = naylon * 1.50
    let priceForPaint = paint * 14.50
    let priceForRazreditel = razreditel * 5.00
    let torbichki = 0.40 

    let totalCost = priceForNaylon+ priceForPaint + priceForRazreditel + torbichki
    let totalPrice = (totalCost * 0.3)* hoursForWork
    let sum = totalCost + totalPrice
    console.log(sum)
}
repainting(["5 ",
"10 ",
"10 ",
"1 "]

)
// 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
// 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
// •	Предпазен найлон - 1.50 лв. за кв. метър
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър

