function oddAndEvenSum(num){
    let numAsString = String(num)
    let even = 0;
    let odd = 0;
    for ( let i = 0; i < numAsString.length; i ++){
        let currentNum = Number(numAsString[i]);
        if ( currentNum % 2 == 0){
            even += currentNum
        } else{
            odd += currentNum
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
