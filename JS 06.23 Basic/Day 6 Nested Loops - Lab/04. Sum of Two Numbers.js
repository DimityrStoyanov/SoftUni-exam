function sumTwoNum(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let counter = 0

    for ( let x = start; x <=end; x++){
        for( let y = start; y <= end; y++){
        counter++
        if ( x + y === magic){
            console.log(`Combination N:${counter} (${x} + ${y} = ${magic})`)
            
        } 
    }
    }

}
sumTwoNum(["88",
"888",
"1000"])

