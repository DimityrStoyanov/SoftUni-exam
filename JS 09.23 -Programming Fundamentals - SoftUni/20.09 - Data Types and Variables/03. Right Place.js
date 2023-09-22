function dataTypes(word, symbol, match){

    let newOne = word.replace(`_`, symbol)
    if ( newOne == match){
        console.log("Matched")
        } else {
            console.log("Not Matched")
        }
        
    }

dataTypes(`Str_ng`, `I`, `Strong`);
dataTypes(`Str_ng`, `i`, `Strong`);
dataTypes(`Str_ng`, `o`, `Strong`);