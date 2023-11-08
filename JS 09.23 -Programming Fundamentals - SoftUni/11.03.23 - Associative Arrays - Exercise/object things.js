let citys = [`Sofia Drujba 800`, `Plovdiv Kamenitsa 700`, `Varna Aksakovo 600`, `Burgas Iztochen 500`]

let myObj = {}
citys.forEach(offer => {
    let [city, zone, price] = offer.split(` `)
    price = Number(price)
    let token = { [zone]: price }
    myObj[city] = token
    if (myObj[city][zone] > 700) {
        myObj[city][zone] = 700
    }
    console.log(myObj[city]);


})

console.log(myObj);


