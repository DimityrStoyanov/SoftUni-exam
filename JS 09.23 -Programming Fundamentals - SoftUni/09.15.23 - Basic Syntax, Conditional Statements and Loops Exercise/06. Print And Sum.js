function printAndSum(num1, num2){
    let summ = 0;
    let read = ``
    for ( let i = num1; i <= num2; i++){
        read +=i+` `
        summ+= i
    }
    console.log(read)
    console.log(`Sum: ${summ}`)

}
printAndSum(5, 10)

