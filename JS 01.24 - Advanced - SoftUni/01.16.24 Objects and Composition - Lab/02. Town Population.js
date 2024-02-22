function solve(arr) {
    let result = {};
    for (let info of arr) {
        let [city, population] = info.split(` <-> `);
        if ( result.hasOwnProperty(city)){
            result[city] += Number(population)
        } else {
            result[city] = Number(population)
        }
    }


for ( let name in result){
    console.log(name, `:` ,result[name])
}
}
console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
))
console.log(solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
))