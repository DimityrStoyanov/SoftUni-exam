function proba(input){
let x = Number(input[0]);
let y = Number(input[1]);
let apartament = " "

    for ( let i = 1; i <= x; i++){
    apartament = " "
        for ( let a = 1; a <= y; a ++){
            if ( i % 2 ===0 && i < x){
                apartament += "O" + i + "0" + a + " "
            } else if ( i < x) {
            apartament += "A" + i + "0" + a + " "
            } else if ( i = x) {
                apartament += "Sky" + i + "0" + a + " "
            } 

        }
        console.log(apartament)
        }
        


        
}
proba(["8", "6"])                  