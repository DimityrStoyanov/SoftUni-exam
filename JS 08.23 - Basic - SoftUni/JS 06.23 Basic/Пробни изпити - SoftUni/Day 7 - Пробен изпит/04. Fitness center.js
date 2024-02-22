function fitnessCenter(input){
    let totalTrain = Number(input[0]);
    let back = Number(0);
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for( i = 1; i <= 10; i++){
        if( input[i] == "Back"){
            back ++
        } else if ( input[i] == "Chest"){
            chest ++
        } else if (input[i] == "Legs"){
            legs ++
        } else if (input[i] == "Abs"){
            abs ++
        } else if (input[i] == "Protein shake"){
            proteinShake ++
        } else if (input[i] == "Protein bar"){
            proteinBar++
        }
        
    }
    console.log(`${back} - back`)
    console.log(`${chest} - chest`)
    console.log(`${legs} - legs`)
    console.log(`${abs} - abs`)
    console.log(`${proteinShake} - protein shake`)
    console.log(`${proteinBar} - protein bar`)
    console.log(`${(((back + chest + legs + abs)/totalTrain)*100).toFixed(2)}% - work out`)
    console.log(`${(((proteinBar + proteinShake)/totalTrain)*100).toFixed(2)}% - protein`)
}
fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])


// •	На първия ред – броят на посетителите във фитнеса – цяло число в интервала [1...1000]
// •	За всеки един посетител на отделен ред – дейността във фитнеса – текст ("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")
