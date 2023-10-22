function equalArrays(arr1, arr2){
    let sum = 0;
    let result = true
for ( let i = 0; i < arr1.length; i++){
    if ( arr1[i] == arr2[i] ){
        sum += Number(arr1[i])
        result = true
    }
    else {
        console.log(`Arrays are not identical. Found difference at ${arr1[i] - 1} index`);
        result = false
        break;
    }
}
if ( result == true){
    console.log(`Arrays are identical. Sum: ${sum}`)
}

}
// equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
// equalArrays(['1'], ['10'])