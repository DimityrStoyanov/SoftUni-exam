function reverseAnArray(num, arr){
    let newArr = [];
    for ( let i = num - 1; i>= 0 ; i--){
        let currentNum = arr[i]
        newArr.push(currentNum)
    }
    console.log(newArr.join(` `))

}
reverseAnArray(3, [10, 20, 30, 40, 50]);
reverseAnArray(4, [-1, 20, 99, 5]);
reverseAnArray(2, [66, 43, 75, 89, 47]);