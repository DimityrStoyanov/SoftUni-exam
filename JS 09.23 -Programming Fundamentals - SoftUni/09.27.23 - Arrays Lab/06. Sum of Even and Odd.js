function sumEvenNum(arr){
    let even = 0;
    let odd = 0
    for ( let i = 0; i < arr.length; i++){
        if ( Number(arr[i]) % 2 == 0){
            even += Number(arr[i]);
        } else {
            odd += Number(arr[i]);
        }
    }
    
    let result = even - odd
    // let summ = []
    // summ.push(result)
    console.log(result)
}
sumEvenNum(['1','2','3','4','5','6'])
sumEvenNum(['3','5','7','9'])
sumEvenNum(['2','4','6','8','10'])