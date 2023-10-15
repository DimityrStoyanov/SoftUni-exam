function cinema(input){
    let index = 0
    let info = input[index]
    index++

    // for ( let i = 1; i >= index; i++){
    //     console.log(info)
    //     info = input[index]
    //     index++
    //     if (info === "Finish" ){
    //         break;
    //     }

    while ( info !== "Finish"){
        info = input[index]
        index++
        console.log(info)
    }

        
        
    }
    


cinema(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
