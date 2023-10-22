function subtract(arr){
    let sumBefore = 0;
    let sumAfter = 0;
    for ( let i = 0; i < arr.length; i++){
        sumBefore += Number(arr[i])
        if ( arr[i] % 2 == 0){
            arr[i] = Number(arr[i]) + i
        } else {
            arr[i] = Number(arr[i]) - i
        }
        sumAfter += Number(arr[i])
    }
    console.log(arr)
    console.log(sumBefore)
    console.log(sumAfter)


}
subtract([5, 15, 23, 56, 35])
subtract([-5, 11, 3, 0, 2])
