function christmasTourmant(input) {
    let days = Number(input[0]);
    let daysPlayed = 0;
    let finish = 0;
    let winGames = 0;
    let loseGames = 0;
    let moneyForDay = 0;
    let winDays = 0;
    let loseDays = 0;
    let moneyForTournament = 0;

    for ( let i = 1; i < input.length; i ++){
        let game = input[i];
        i++
        let status = input[i];
        if ( status == "win"){
            winGames++
            moneyForDay += 20;
        } else if ( status == "lose"){
            loseGames ++
        }
        if ( game == "Finish"){
            daysPlayed++
            moneyForTournament = moneyForTournament + moneyForDay
            if(winGames > loseGames){
                moneyForDay = moneyForDay * 1.1
                winDays++
            } else if (loseGames > winGames){
                loseDays++
            }
            finish++
            
            }
            
        
        }
        if ( finish = days){
           
            if (winDays > loseDays){
                moneyForTournament = moneyForTournament * 1.2
            }
           
            
    
        }
        console.log(moneyForTournament)
        console.log(winDays)
        console.log(loseDays)
        console.log(winDays)

    }
christmasTourmant(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])