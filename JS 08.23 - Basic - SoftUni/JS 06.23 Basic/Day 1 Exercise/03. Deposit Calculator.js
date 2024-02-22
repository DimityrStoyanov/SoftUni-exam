function depositCalculator(input){
 let depostiPrice = Number(input[0]);
 let period = Number(input[1]);
 let glp = Number(input[2]) / 100

 let sum = depostiPrice + period *((depostiPrice* glp) / 12)

 console.log(sum)
}
depositCalculator(["200 ",
"3 ",
"5.7 "]
)

//1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
//2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
//3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)