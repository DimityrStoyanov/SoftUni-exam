function solve(text) {
    let splited = text.split(``)
    let end = []
    let result = []
    for (let i = 0; i < splited.length; i++) {
        if (splited[i].charCodeAt() < 96) {
            end.push(i)
        }
    }
    
    for ( let j = 0; j < end.length; j ++){
        let word = text.substring(end[j], end[j+1])
        result.push(word)
    }
    console.log(result.join`, `);


}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
// solve('HoldTheDoor')
// solve('ThisIsSoAnnoyingToDo')