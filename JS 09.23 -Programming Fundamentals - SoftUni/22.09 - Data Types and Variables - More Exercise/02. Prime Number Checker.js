function primeNum(num){
    let isPrime = num
    for ( let i = 2; i < num; i++){
        num%i == 0? isPrime *= false: isPrime *= true
    }
    if ( isPrime == 0){
        console.log(false)
    } else {
        console.log(true)
    }
}
primeNum(8)
primeNum(7)
primeNum(81)