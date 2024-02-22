function building(input){
    let floors = Number(input[0]);
    let properties = Number(input[1]);

    for ( let i = floors; i >= 1 ; i--){
        let name = " "
        
        for ( let b = 0 ;b < properties; b++){
            if ( i >= floors) {
                name += "L" + i + b+ " "
                
            }
            else if( i % 2 === 0){
                name += "O" + i + b+ " "
            } else {
            name += "A" + i + b+ " "
            }
            
        }  
        console.log(name)
   
  
}
}
building(["6", "4"])