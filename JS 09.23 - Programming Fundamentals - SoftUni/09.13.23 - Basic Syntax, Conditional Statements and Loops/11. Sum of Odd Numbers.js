function sumOfOddNumbers(num){
    let summ = 0;
    let odd = 1;
    for ( let i = 1; i <= num; i ++){
        console.log(odd);
        summ += odd
        odd = odd +2;
    }
    console.log(`Sum: ${summ}`)

}
sumOfOddNumbers(5)