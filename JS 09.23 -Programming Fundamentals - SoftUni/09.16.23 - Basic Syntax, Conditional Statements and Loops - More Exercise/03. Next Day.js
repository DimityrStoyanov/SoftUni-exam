// function nextDay(year, month, day){

// }
// nextDay(2016, 9, 30)
// nextDay(2020, 3, 24)

function calcNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;//86 400 000 milliseconds in one day
    let nextDate = new Date(date.getTime() + oneDay);
    console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
}
 
calcNextDay(2016, 7, 22);