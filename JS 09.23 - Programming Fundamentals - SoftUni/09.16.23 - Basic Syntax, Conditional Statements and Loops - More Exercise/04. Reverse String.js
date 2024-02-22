function reverseString(word){
    let arr = ``
    let current = ``
    for ( let i = word.length -1; i >= 0 ; i--){
    current = word[i]
    arr += current
    }
    console.log(arr)
}
reverseString(`Hello`)
reverseString(`SoftUni`)
reverseString(`1234`)