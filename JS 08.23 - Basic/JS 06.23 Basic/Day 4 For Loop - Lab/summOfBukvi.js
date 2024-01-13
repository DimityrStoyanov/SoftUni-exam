function bukvi(input){
    let word = (input[0]);
    let wordWithLowerCase = word.toLowerCase ();
    let sum = 0

    for ( i = 0; i < wordWithLowerCase.length; i ++){
        let bukwa = wordWithLowerCase[i]
        switch (bukwa){
            case "a": sum +=1; break;
            case "e": sum +=2; break;
            case "i": sum +=3; break;
            case "o": sum +=4; break;
            case "u": sum +=5; break;
        }
    }
    console.log(sum)
}
bukvi(["vesiEsladka"])