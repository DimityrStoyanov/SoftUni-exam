function numberInRange(input){
    let ourNumber = Number(input[0]);

    if(ourNumber >= -100 && ourNumber <= 100 && ourNumber !== 0){
        console.log(`Yes`)
    } else {
        console.log(`No`)
    }
}
numberInRange(["-101"])