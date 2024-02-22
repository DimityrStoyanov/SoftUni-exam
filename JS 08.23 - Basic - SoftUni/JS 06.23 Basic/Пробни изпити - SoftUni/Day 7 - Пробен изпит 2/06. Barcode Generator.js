function barcode(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let currentNum = 0;
    for (let i = a; i <= b; i++){
        currentNum = i
        for (let m = 2; m < currentNum; m++){
            if (currentNum % m === 0) {
                onsole.log(currentNum)
                currentNum++
        }
        
        }
            
        
    }
    
    
    
}
barcode(["2345",
    "6789"])