function radiansToDegrees(input){
    let radians = Number(input[0]);
    let degree = (radians * 180) / Math.PI

    console.log(degree)
}
radiansToDegrees(["3.1416"])