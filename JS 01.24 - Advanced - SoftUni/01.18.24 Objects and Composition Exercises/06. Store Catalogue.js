function solve(arr) {
    let result = []
    for (let tokens of arr) {
        let alpha = tokens[0]
        let [name, price] = tokens.split(` : `)
        price = Number(price)
        let info = {
            name: name,
            price: price
        }
        result.push(info)

    }
    result.sort((a, b) => a.name.localeCompare(b.name))

    let finalResult = {};
    result.forEach(element => {
        let alphabet = element.name[0]
        if (!finalResult[alphabet]) {
            finalResult[alphabet] = []
        }
        finalResult[alphabet].push(element)

    });

    for (let letter in finalResult) {
        console.log(letter)
        finalResult[letter].forEach(element => {
            console.log(`  ${element.name}: ${element.price}`)
        });
    }
    // За преправяне, трябва да се измисли логика.

}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']


)
solve(['Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)