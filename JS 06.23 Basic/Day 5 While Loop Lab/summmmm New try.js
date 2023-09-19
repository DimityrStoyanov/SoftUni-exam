function sumNumber(input){
    let endNum = Number(input[0]);
    let index = 1;
    let num = Number(input[index]);
    index++
    let sum = 0

    while ( sum < endNum){
        sum = num + Number(sum)
        num = Number(input[index]);
        index++
    }
    console.log(sum)

  

}
sumNumber(["100",
"10",
"20",
"30",
"40"])
