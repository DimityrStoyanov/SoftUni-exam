function sumSeconds(input){
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let numC = Number(input[2]);
    let totalSec = numA + numB + numC
    let minutes = Math.floor(totalSec / 60)
    let seconds = totalSec % 60

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else (
        console.log(`${minutes}:${seconds}`)
    )
}
sumSeconds(["22", "7", 
"34"])

