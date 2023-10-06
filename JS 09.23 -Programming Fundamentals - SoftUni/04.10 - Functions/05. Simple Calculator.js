function simpleCalculator(numOne, numTwo, operator) {
    switch(operator){
        case "multiply": console.log(numOne * numTwo); break;
        case "divide": console.log(numOne / numTwo); break;
        case "add": console.log(numOne + numTwo); break;
        case "subtract": console.log(numOne - numTwo); break;
    }

}
simpleCalculator(5,
    5,
    'multiply')
simpleCalculator(40,
    8,
    'divide')
simpleCalculator(12,
    19,
    'add'
)
simpleCalculator(50,
    13,
    'subtract')