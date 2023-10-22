function latin(num) {
    let sum = 0;
    for (let a = 1; a <= num; a++) {

        for (let b = 1; b <= num; b++){

            for( let c = 1; c <= num; c++){
                console.log(`${String.fromCharCode(96+a)}${String.fromCharCode(96+b)}${String.fromCharCode(96+c)}`)
            }
        }
    }

}
latin(3)