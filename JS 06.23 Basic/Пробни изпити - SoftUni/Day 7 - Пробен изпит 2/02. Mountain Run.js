function mountainRun(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let speedInTime = Number(input[2]);

    let timeForDistance = distance * speedInTime
    let delay = (Math.floor(distance / 50)) * 30

    let totalTimeNeeded = timeForDistance + delay
    
    if( totalTimeNeeded < record){
        console.log(`Yes! The new record is ${totalTimeNeeded.toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(totalTimeNeeded - record).toFixed(2)} seconds slower.`)
    }
}
mountainRun(["10164", "1400", "25"])
// 1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3. Времето в секунди, за което изкачва 1 м. – реално число в интервала [0.00 … 1000.00]