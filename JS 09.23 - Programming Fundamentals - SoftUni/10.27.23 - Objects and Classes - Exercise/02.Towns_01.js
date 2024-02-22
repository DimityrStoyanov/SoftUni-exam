function solve(arr) {
    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude
            this.longitude = longitude
        }
    }

    for (let information of arr) {
        let tokens = information.split(` | `)
        let town = tokens.shift()
        let latitude = Number(tokens.shift()).toFixed(2)
        let longitude = Number(tokens.shift()).toFixed(2)
        let result = { town: town, latitude: latitude, longitude: longitude }
        let city = new Town(town, latitude, longitude)
        console.log(result)
        console.log(city)
    }



}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)
solve(['Plovdiv | 136.45 | 812.575'])