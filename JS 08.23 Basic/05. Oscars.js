function oscars(input) {
    let nominatedActor = input[0];
    let pts = Number(input[1]);
    let name = ``
    let rate = 0;
    for (let i = 3; i < input.length; i++) {
        name = input[i]
        i++
        rate = input[i]
        let ptsFromName = (name.length * rate) / 2
        pts = pts + ptsFromName
        if ( pts >= 1250.5){
            console.log(`Congratulations, ${nominatedActor} got a nominee for leading role with ${pts.toFixed(1)}!`)
            break;
        }

    }
    if (pts < 1250.5){
        console.log(`Sorry, ${nominatedActor} you need ${(1250.5 - pts).toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])