function specialNum(num){
    
    for ( let i = 1; i <= num; i++){
        sum = 0;
        let numAsString = String(i)
        for ( let b = 0; b < numAsString.length; b++){
            let currentNum = Number(numAsString[b])
            sum += currentNum
        }
        console.log(sum == 5|| sum == 7 || sum == 11? `${i} -> True`: `${i} -> False`);
    }
}
// specialNum(15)
specialNum(20)
// specialNum(15)
