function oscars(input){
    let nameOfActor = input[0];
    let ptsFromAcademy = Number(input[1]);
    let numbersOfVotes = Number(input[2]);

    let name = ""
    let ptsWonFromActor = ""
    let ptsNeeded = 0
    for (let i = 3; i <= (numbersOfVotes*2)+2; i ++){
        if( i % 2 !== 0){
            name = (input[i]).length

            
        } else {
            ptsWonFromActor = input[i]
            

        }
    }
    for (let i = 3; i <= (numbersOfVotes*2)+2; i ++){
        ptsNeeded = (name* ptsWonFromActor) / 
        console.log(ptsNeeded)
    }
   
    

}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
