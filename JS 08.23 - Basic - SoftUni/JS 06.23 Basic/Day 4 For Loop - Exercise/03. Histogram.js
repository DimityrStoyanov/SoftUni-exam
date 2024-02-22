function histogram(input){
    let numbers = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for ( let i = 1 ; i <= numbers; i ++){
        let n = Number(input[i])
        if (n < 200){
            p1 += 1
        } else if ( n >= 200 && n <= 399){
            p2 +=1
        } else if ( n <= 599){
            p3 +=1
        } else if ( n <= 799){
            p4 +=1
        } else {
            p5 +=1
        }
    }
    console.log(`${((p1 / numbers)* 100).toFixed(2)}%`)
    console.log(`${((p2 / numbers)* 100).toFixed(2)}%`)
    console.log(`${((p3 / numbers)* 100).toFixed(2)}%`)
    console.log(`${((p4 / numbers)* 100).toFixed(2)}%`)
    console.log(`${((p5 / numbers)* 100).toFixed(2)}%`)


}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])
