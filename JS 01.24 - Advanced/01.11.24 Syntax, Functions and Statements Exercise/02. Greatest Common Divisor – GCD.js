function solve(num1, num2){
    let result = 0;
    min = 0;
    if ( num1 > num2){
        min = num1
    } else {
        min = num2
    }

    for ( let i = 1; i <= min; i ++ ){
        if (num1 % i === 0 && num2 % i === 0){
            result = i
        }
    }

    console.log(result);
}
solve(15, 5)
solve(2154, 458)