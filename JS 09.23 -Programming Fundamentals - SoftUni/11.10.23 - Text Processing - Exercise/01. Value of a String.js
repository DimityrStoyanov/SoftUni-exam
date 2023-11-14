function solve([text, command]) {
    let textToArr = text.split(``);
    let sum = 0;
    textToArr.forEach(element => {
        if (command == `UPPERCASE`){
            if ( element.charCodeAt()> 64 && element.charCodeAt() < 91){
                sum +=element.charCodeAt()
            }
        } else if (command == `LOWERCASE`){
            if ( element.charCodeAt()> 96 && element.charCodeAt() < 123){
                sum +=element.charCodeAt()
        }
    }
    });
    console.log(`The total sum is: ${sum}`);

}
solve(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']
)
solve(['AC/DC',
    'UPPERCASE']
)