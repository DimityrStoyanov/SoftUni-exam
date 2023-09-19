function sumNumbers(input){
    let mainNum = Number(input[0]);
    let sum = 0
    let index = Number(input[1])
    index++
    

    while ( sum <= mainNum){
        sum = sum + Number(input[index])
        index++
    }
    console.log(index)

}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
