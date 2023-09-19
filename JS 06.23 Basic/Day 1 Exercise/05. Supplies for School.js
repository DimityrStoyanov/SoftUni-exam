function suppliesForSchool (input){
    let pens = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let cleaner = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;

    let sum = (pens + markers + cleaner ) * (1 - discount)
    console.log(sum)
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)

// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)
// Вход
// От конзолата се четат 4 числа:
// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]
