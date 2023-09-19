function tenisRanklist(input){
    let numberOfTournaments = Number(input[0]);
    let startPts = Number(input[1])

    let totalPts = 0
    let avaragePts = 0
    let percentWins = 0
    let statsuOfTournament = ""
    let w = 0

    for ( let i = 2; i <= numberOfTournaments + 1; i ++){
        statsuOfTournament = input[i]
        switch (statsuOfTournament){
            case "W": totalPts = totalPts + 2000; break;
            case "F": totalPts = totalPts + 1200; break;
            case "SF": totalPts = totalPts + 720; break;
        } 
    }

    for ( let i = 2; i <= numberOfTournaments + 1; i ++){
        statsuOfTournament  = input[i]
        switch (statsuOfTournament){
            case "W": w = w + 1; break
        }
        
    }
    
    
    console.log(`Final points: ${totalPts + startPts}`)
    console.log(`Average points: ${Math.floor(totalPts / numberOfTournaments)}`)
    console.log(`${((w/numberOfTournaments)*100).toFixed(2)}%`)


}
tenisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])


