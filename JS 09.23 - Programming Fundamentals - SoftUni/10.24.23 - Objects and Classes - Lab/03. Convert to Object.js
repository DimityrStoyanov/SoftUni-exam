function solve(json) {
    let person = JSON.parse(json)

    let info = Object.entries(person);
    for (let [key, value] of info) {
        console.log(`${key}: ${value}`)
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')