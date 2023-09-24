function biggest(num1, num2, num3){
    let biggestNum = 0;
    if ( num1 >= num2 && num1 >= num3 ){
        biggestNum = num1
    } else if ( num2 >= num1 && num2 >= num3 ){
        biggestNum = num2
    } else if ( num3 >= num2 && num3 >= num1 ){
        biggestNum = num3
    } 
    console.log(biggestNum)
}
biggest(-2,
    7,
    3)
    biggest(130,
        5,
        99)
    biggest(43,
        43.2,
        43.1)
    biggest(2,
        2,
        2)
