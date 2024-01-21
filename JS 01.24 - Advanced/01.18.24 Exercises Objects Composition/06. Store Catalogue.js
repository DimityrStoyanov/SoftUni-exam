function solve(arr) {
    let result = {}
    for (let tokens of arr) {
        let alpha = tokens[0]
        let product = [tokens]
        if (result.hasOwnProperty(alpha)) {
            result[alpha] = product.push(...tokens)
        } else {
            result[alpha] = product;
        }

    }
    console.log(result);

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