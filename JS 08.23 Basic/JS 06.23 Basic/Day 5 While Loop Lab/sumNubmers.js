function sumNumbers(input){
    let mainNumm = Number(input[0]);
    let index = 1
    let num = Number(input[index]);
    index++
    let sum = 0
    while (  sum < mainNumm ) {
        sum = sum + num
        num = Number(input[index])
        index++
    }
    console.log(Number(sum))

}
sumNumbers(["100",
"10",
"20",
"30",
"40",
"40",
"30"])
