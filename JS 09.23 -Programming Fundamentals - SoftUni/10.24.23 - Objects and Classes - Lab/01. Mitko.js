let information = {
    City: `Plovdiv`,
    From: `Plazarzhik`,
    age: 0,
    cars: {
        one: `BMW`,
        two: `Golf`
    }
};
let token = { m: `g-n`, f: `g-ja` }
information[token.m] = `Dimitar`;
information.lastName = `Stoyanov`;
information[`age`] = 33

information[token.m][`secondName`] = `Mihaylov`;


let keys = information[`cars`][`one`]

information.cars.three = `Ford`

let cars = information.cars

let key = Object.values(cars)

for ( let parts of key){
    console.log(parts);
    information[`newCar`] += parts
}
let newOne = JSON.stringify(information)
console.log(newOne);
