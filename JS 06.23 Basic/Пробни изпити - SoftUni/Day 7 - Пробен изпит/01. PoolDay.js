function poolDay(input){
    let totalPeople = Number(input[0]);
    let entryTax = Number(input[1]);
    let sunbed = Number(input[2]);
    let umbrella = Number(input[3]);

   let totalEntryTax = totalPeople * entryTax
   let totalUmrellaTax = (Math.ceil(totalPeople / 2)) * umbrella
   let totalSunbedTax = (Math.ceil(totalPeople * 0.75)) * sunbed

   let totalMoney = totalEntryTax + totalUmrellaTax + totalSunbedTax

   console.log(`${totalMoney.toFixed(2)} lv.`)

   
}

poolDay(["100",
"8",
"6",
"4"])


// •	Първи ред – брой на хората. Цяло число в интервала [1…100]
// •	Втори ред – такса вход. Реално число в интервала [0.00…50.00]
// •	Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
// •	Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00] 
