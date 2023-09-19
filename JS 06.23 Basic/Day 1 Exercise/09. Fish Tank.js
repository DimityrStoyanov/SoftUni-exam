function fishTank(input){
    let length = Number(input[0]);
    let wigth = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) /100

    let totalSizeOfFishTank = (length * wigth * height) / 1000
    let acsesoares = totalSizeOfFishTank * percent
    console.log(totalSizeOfFishTank - acsesoares)
}
fishTank(["85 ","75 ","47 ","17 "])
// 1.	Дължина в см – цяло число в интервала [10 … 500]
// 2.	Широчина в см – цяло число в интервала [10 … 300]
// 3.	Височина в см – цяло число в интервала [10… 200]
// 4.	Процент  – реално число в интервала [0.000 … 100.000]

