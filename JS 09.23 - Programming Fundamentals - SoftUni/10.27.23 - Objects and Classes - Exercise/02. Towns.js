function solve(arr) {

    for (let param of arr) {
        let tokens = param.split(` | `)
        let town = tokens.shift()
        let latitude = Number(tokens.shift()).toFixed(2)
        let longitude = Number(tokens.shift()).toFixed(2)
        let result = { town: town, latitude: latitude, longitude: longitude }
        console.log(result);


    }
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)
solve(['Plovdiv | 136.45 | 812.575'])