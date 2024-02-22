function solve(arr) {
    let chest = arr.shift().split(`|`)

    for (let commands of arr) {
        let element = commands.split(` `)
        let action = element.shift()

        if (action == `Loot`) {
            for (let loot of element) {
                if (chest.includes(loot)) {
                    continue
                } else {
                    chest.unshift(loot)
                }
            }
        } else if (action == `Drop`) {
            let index = Number(element.shift())
            if (index >= chest.length) {
                continue
            } else {
                let dropedItem = chest.splice(index, 1)
                chest.push(dropedItem[0])
            }
        } else if (action == `Steal`) {
            let count = Number(element.shift())
            let steal =[]
            for ( let i = 1; i <= count; i++){
                let item = chest.pop()
                steal.unshift(item)
            }
            console.log(steal.join(`, `))
           
            
        }
        
    }
    if ( chest.length <= 0){
        console.log(`Failed treasure hunt.`);
    } else {
        let avg = 0;
        for ( let elements of chest){
            avg += elements.length
        }
        console.log(`Average treasure gain: ${(avg/ chest.length).toFixed(2)} pirate credits.`);
    }

}
solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])


