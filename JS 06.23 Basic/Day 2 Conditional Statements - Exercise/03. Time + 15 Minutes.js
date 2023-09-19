function timePlus15 (input){
    let hrs = Number(input[0])
    let min = Number(input[1])

    let minPlus15 = min + 15

    if (minPlus15 >59) {
        hrs += minPlus15 % 60
    }

    let finalMin = minPlus15 % 60
    let finalHRS = hrs % 24 
    if (finalMin < 10) {
    console.log(`${finalHRS}:0${finalMin}`)
    } else {
        console.log(`${finalHRS}:${finalMin}`)
    }

}
timePlus15(["11", "08"])