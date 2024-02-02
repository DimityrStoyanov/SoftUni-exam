function solve(arr) {
    let result = {};
    for (let tokens of arr) {

        let [town, latitude, longitude] = tokens.split(`|`)
            console.log(town, latitude, longitude)
    
}

}
console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))