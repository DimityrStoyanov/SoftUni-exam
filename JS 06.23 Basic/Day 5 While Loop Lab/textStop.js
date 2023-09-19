function textStop(input){
    let index = 0
    let word = input[index]
    index++

    while ( word !== "Stop" && word !== "London" || word !== "AfterStop"){
        console.log(word)
        word = input[index]
        index++
    }

}
textStop(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
