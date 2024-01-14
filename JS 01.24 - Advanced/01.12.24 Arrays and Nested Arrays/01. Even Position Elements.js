function solve(arr){
    let result = []
    for ( let i = 0; i < arr.length; i ++){
       let num = (arr[i])
        if ( i % 2 == 0 ){
            result.push(num)
        }
    }
    console.log(result.join(` `))
}
solve(['20', '30', '40',

'50', '60'])