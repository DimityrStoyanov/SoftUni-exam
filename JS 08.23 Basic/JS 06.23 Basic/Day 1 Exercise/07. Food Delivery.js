function foodDelivery(input){
    let chickenMenus = Number(input[0]) * 10.35;
    let fishMenus = Number(input[1]) * 12.40;
    let vegeMenus = Number(input[2]) * 8.15;
    let desert = (chickenMenus + fishMenus + vegeMenus) * 0.20
    let deliveryPrice = 2.50

    let totalPrice = chickenMenus + fishMenus + vegeMenus + desert + deliveryPrice

    console.log(totalPrice)
}
foodDelivery(["2 ",
"4 ",
"3 "]
)
// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв
// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]
