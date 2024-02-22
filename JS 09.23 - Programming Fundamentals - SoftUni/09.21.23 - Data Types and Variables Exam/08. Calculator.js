function calculator(num1, symbol, num2) {
    if (symbol == '+') {
        console.log((num1 + num2).toFixed(2))
    } else if (symbol == '*') {
        console.log((num1 * num2).toFixed(2))
    } else if (symbol == '/') {
        console.log((num1 / num2).toFixed(2))
    } else {
        console.log((num1 - num2).toFixed(2))
    }

}
calculator(5, '+', 10)
calculator(15, '-', 10)
calculator(5, '*', 10)
calculator(25, '/', 5)
