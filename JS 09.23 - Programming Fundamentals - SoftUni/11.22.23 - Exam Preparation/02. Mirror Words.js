function solve([arr]) {

    let pattern = /(@|#)[a-zA-Z]{3,}\1\1[a-zA-Z]{3,}\1/g;
    let matches = arr.match(pattern);
    let result = [];

    if (matches === null) {
        console.log(`No word pairs found!`)
    } else {
        console.log(`${matches.length} word pairs found!`);
        
    for (let parts of matches) {
        let symbol = parts[0]
        let tokens = parts.split(`${symbol}${symbol}`)
        let wordOne = tokens[0]
        let wordTwo = tokens[1]
        if (wordOne == wordTwo.split('').reverse().join('')) {
            result.push(`${wordOne.slice(1)} <=> ${wordTwo.slice(0, -1)}`)
        }
    }

    }
    // Първата проверка за съвпадения приключва.
    // Започва проверката за огледални думи от масива.

    
    if (result.length < 1) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(`, `));
    }
}
// solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
solve([`#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#`])