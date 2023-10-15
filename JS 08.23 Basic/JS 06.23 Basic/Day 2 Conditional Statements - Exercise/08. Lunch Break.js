function lunchBreak(input){
    let serial = input[0];
    let serialDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunch = breakDuration * 1 / 8
    let rest = breakDuration * 1 / 4

    let timeNeeded = breakDuration - lunch - rest

    if (timeNeeded >= serialDuration) {
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(timeNeeded - serialDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(serialDuration - timeNeeded)} more minutes.`)
    }

    
}
lunchBreak(["Teen Wolf",
"48",
"60"])

