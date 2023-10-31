function solve(arr1, arr2) {
    let products = {};

    for (let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i];
        let quantity = Number(arr1[i + 1]);
        products[product] = quantity

    }

    for (let j = 0; j < arr2.length; j += 2) {
        let newProduct = arr2[j];
        let newQuantity = Number(arr2[j + 1]);

        if (newProduct in products) {
            products[newProduct] += newQuantity;
        } else {
            products[newProduct] = newQuantity;
        }

    }
    let arr3 = Object.entries(products)

    for (let tokens of arr3) {
        let result = tokens[0];
        let count = tokens[1];
        console.log(`${result} -> ${count}`);
    }


}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)
// solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
// )