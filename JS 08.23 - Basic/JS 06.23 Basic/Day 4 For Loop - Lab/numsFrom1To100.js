function stepen(input){
    let currentStepen=Number(input[0]);


    for( let i = 0; i <= currentStepen; i+=2){
        
        console.log(Math.pow(2, i))
    }

}
stepen(["5"])