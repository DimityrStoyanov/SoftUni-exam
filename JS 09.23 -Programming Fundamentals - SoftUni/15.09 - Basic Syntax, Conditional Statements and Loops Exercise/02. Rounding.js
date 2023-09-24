function rounding(num, symbol) {
    ;
    if (symbol > 15) {
        symbol = 15;

    }
    console.log(parseFloat(num.toFixed(symbol)))
}
rounding(10.5, 3)