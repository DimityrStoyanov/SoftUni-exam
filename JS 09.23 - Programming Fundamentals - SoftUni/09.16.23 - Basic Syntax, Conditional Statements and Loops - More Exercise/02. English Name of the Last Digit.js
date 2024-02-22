function nameOfTheLastDigit(num){
    let numAsString = String(num)
    // let lastNum = 0;
    // // for ( let i = 0; i < numAsString.length; i ++){
    // //     lastNum = Number(numAsString[i])
    // // }
    // // console.log(lastNum);
    let lastNum = Number(numAsString[numAsString.length - 1])
    // console.log(lastNum);
    if ( lastNum == 1){
        console.log(`one`)
    }else if ( lastNum == 2){
        console.log(`two`)
    }else if ( lastNum == 3){
        console.log(`three`)
    }else if ( lastNum == 4){
        console.log(`four`)
    }else if ( lastNum == 5){
        console.log(`five`)
    }else if ( lastNum == 6){
        console.log(`six`)
    }else if ( lastNum == 7){
        console.log(`seven`)
    }else if ( lastNum == 8){
        console.log(`eight`)
    }else if ( lastNum == 9){
        console.log(`nine`)
    }else if ( lastNum == 0){
        console.log(`zero`)
    }

}
nameOfTheLastDigit(512)
nameOfTheLastDigit(1)
nameOfTheLastDigit(1643)
nameOfTheLastDigit(415)
nameOfTheLastDigit(659)