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
let grad = `Vratsa`
let kvartal = `Kompleksa`
let naem = 550
myObj[grad] ={kvartal : naem}
console.log(myObj);


// Creating an object
let myObject = {
  key1: 'value1',
  key2: 'value2',
  mitko: `ivan`
};

// Checking if the object has a specific key

let proba = myObject.mitko
let asd = `mitko`
console.log(myObject.mitko);
if (myObject.hasOwnProperty(asd)) {
  console.log('myObject has key1');
} else {
  console.log('myObject does not have key1');
}





