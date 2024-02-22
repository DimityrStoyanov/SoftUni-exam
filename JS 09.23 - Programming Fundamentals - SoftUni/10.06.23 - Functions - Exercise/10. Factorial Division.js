function factorialDivision(num1, num2) {

    let result = 1
    for (let i = 1; i <= num1; i++) {
        result *= i
    }
    

    let result2 = 1
    for (let j = 1; j <= num2; j++) {
        result2 *= j
    }
    

    console.log((result / result2).toFixed(2));
}

factorialDivision(5, 2)
factorialDivision(6, 2)
