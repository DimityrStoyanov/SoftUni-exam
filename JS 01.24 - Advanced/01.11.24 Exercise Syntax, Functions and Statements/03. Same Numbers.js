function solve(num){
    let asd = num.toString()
    let result = true;
    let sum = 0;
    for ( let i = 0; i < asd.length; i ++){
        sum += Number(asd[i]);
        for ( let y = 0; y < asd.length; y++)
        if (Number(asd[i]) !== Number(asd[y]) ){
            result = false
            continue
        }
    }

    console.log(result);
    console.log(sum);
}
solve(2222222)
solve(1234)
solve(112233)