function spiceMustFlow(startSpices) {
    let workers = 26
    let spices = startSpices
    let dropedSpices = startSpices
    let days = 0
    while (dropedSpices >= 100){
        if ( spices < workers){
            workers = spices
        }
        spices -= workers 
        dropedSpices -= 10
        days++
        spices += dropedSpices 
      

    }

console.log(days)
console.log(spices - workers)
}




spiceMustFlow(111)
spiceMustFlow(450)
spiceMustFlow(450)