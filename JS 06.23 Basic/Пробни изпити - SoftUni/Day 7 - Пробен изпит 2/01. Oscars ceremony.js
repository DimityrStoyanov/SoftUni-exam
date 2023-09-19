function oscar(input){
    let rent = Number(input[0]);
    let statuette = rent * 0.7
    let ketering = statuette * 0.85
    let sound = ketering * 0.5
    let totalExpense = rent + statuette + ketering + sound

    console.log(totalExpense.toFixed(2))
}
oscar(["3500"])
// Статуетки – цената им е 30% по-малка от наема на залата
// • Кетъринг – цената му е 15% по-малка от тази на статуетките
// • Озвучаване – цената му е 1 / 2 от цената за кетъринг