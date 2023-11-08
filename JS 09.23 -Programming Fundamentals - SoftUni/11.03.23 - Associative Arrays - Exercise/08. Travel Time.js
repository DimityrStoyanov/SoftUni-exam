
function solve(arr) {
    let myObject = {}
    for (let travel of arr) {
        let [country, city, price] = travel.split(` > `)
        price = Number(price)
        let offer = { [city]: price }
        if (country[city] in myObject) {
            myObject[country][city] = offer
        } else {
            myObject[country] = offer
        }

    }
    let asd = (Object.values(myObject));
    console.log(asd[0]);


}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)