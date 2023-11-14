function solve(arr) {
    let asd = arr[0].split(``)
    let token = []
    for (let i = 0; i < asd.length; i++) {
        let current = asd[i]
        let index = []
        if (token.includes(current)) {
            continue
        }
        token.push(current)
        for (let j = 0; j < asd.length; j++) {
            if (current == asd[j]) {
                index.push(j)
            }
        }
        console.log(`${current}:${index.join(`/`)}`)
    }
}
solve(["abababa"])
solve(["avjavamsdmcalsdm"])