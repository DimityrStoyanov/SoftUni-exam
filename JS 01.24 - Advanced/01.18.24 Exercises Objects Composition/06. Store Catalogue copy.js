function sortedCatalog(input) {
    // Step 1: Parse input and create array of objects
    const products = input.map(item => {
        const [name, price] = item.split(' : ');
        return { name, price: Number(price) };
    });
    

    // Step 2: Sort the array of objects alphabetically
    products.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

    // Step 3: Group products by the initial letter of their names
    const groupedProducts = {};
    products.forEach(product => {
        const initialLetter = product.name[0].toUpperCase();
        if (!groupedProducts[initialLetter]) {
            groupedProducts[initialLetter] = [];
        }
        groupedProducts[initialLetter].push(product);
    });
    console.log(groupedProducts)

    // Step 4: Print the grouped products with the specified format
    for (const initialLetter in groupedProducts) {
        console.log(initialLetter);
        groupedProducts[initialLetter].forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}

// Example usage with the provided input
const input = ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'];

sortedCatalog(input);
// sortedCatalog(['Banana : 2',
//     'Rubic`s Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10']
// )