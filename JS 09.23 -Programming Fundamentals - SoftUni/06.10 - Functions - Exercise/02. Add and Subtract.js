function addAndSubtract(num1, num2, num3) {
    function sum(a, b) {
        return a + b
    }

    function sub(a, b) {
        return a - b
    }

    let result = sum(num1, num2);
    let result2 = sub(result, num3)
    console.log(result2);
}
addAndSubtract(23,
    6,
    10
)
addAndSubtract(1,
    17,
    30
)
addAndSubtract(42,
    58,
    100
)