function magicSum(arr, magicNum){
        magicArr = []
    for ( let i = 0; i < arr.length; i ++){
        for (let j = i+ 1; j < arr.length; j++){
            if ( arr[i] + arr[j] == magicNum){
                magicArr.push(arr[i]) 
                magicArr.push(arr[j]) 
                console.log(magicArr.join(` `))
                magicArr = []
            }
        }
    }

}
// magicSum([1, 7, 6, 2, 19, 23],8)
magicSum([14, 20, 60, 13, 7, 19, 8],27)
// magicSum([1, 2, 3, 4, 5, 6],6)