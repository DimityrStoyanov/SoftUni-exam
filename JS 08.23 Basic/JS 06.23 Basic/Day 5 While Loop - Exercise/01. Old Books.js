function oldBooks(input){
    let index = 0;

    let bookSearched = input[0];
    index++

    let command = input[index];
    index++; 

    let bookCheked = 0
    while ( command !== "No More Books") {
        if (command = bookSearched){
            console.log(`You checked ${bookCheked} books and found it.` );
            break;
        }
    } 
    bookCheked++
    command = input[index]
    index++


console.log*(`The book you search is not here!`)
console.log*(`You checked ${bookCheked} books.`)


}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
