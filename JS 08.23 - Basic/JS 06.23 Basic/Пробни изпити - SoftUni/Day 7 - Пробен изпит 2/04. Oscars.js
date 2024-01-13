function oscars(input) {
    let name = input[0];
    let judges = Number(input[2]);
    let startPts = Number(input[1]);

    let ptsFromJudge = 0
    let ptsNeeded = startPts
    for (let i = 3; i < input.length; i++) {
        ptsFromJudge = ((input[i].length) * input[i + 1]) / 2
        i++
        ptsNeeded += ptsFromJudge
        if (ptsNeeded >= 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${ptsNeeded.toFixed(1)}!`)
            break;
        }


    }
    if (ptsNeeded < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - ptsNeeded).toFixed(1)} more!`)
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

// Име на актьора – текст
// • Точки от академията - реално число в интервала [2.0... 450.5]
// • Брой оценяващи n – цяло число в интервала[1… 20]
// На следващите n-на брой реда:
// o Име на оценяващия – текст
// o Точки от оценяващия – реално число в интервала [1.0... 50.0]