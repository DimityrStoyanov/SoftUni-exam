function readtext(input){
let index = 0
let text = input[index];
index = index + 1

while ( text !== "Stop"){
    console.log(text)
    text = input[index]
    index = index + 1
    
}
}
readtext(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
