function maxNumber(input){
    let index = 0
    let command = input[index];
    index++

    let myMaxNum = Number.MIN_SAFE_INTEGER
    while (command !== "Stop"){
        let num = Number(command)
        console.log(num)

        command = input[index]
        index++
    }

}
maxNumber(["-1",
"-2",
"Stop"])
