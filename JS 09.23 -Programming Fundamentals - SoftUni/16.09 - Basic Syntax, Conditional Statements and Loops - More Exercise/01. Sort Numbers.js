function sortNum(num1, num2, num3){
   let arr = []
   arr.push(num1, num2, num3)
   let result = arr.sort((a,b)=>b-a)
    for ( let i = 0; i < result.length; i ++){
        console.log(result[i])
    }
}
sortNum(2,1,3)
// sortNum(-2,1,2)
// sortNum(0,0,3)
// sortNum(0,4,3)