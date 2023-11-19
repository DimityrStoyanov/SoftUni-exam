function solve(arr) {
    let pattern = />>(?<product>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/g;
    let products = []
    let match = pattern.exec(arr)
    let result = 0;


    while (match != null) {
        let { product, price, quantity } = match.groups
        products.push(product)
        result += price * quantity
        match = pattern.exec(arr)
    }

    if ( products.length > 0){
        console.log(`Bought furniture:`)
        console.log(`${products.join(`\n`)}`)
        console.log(`Total money spend: ${result.toFixed(2)}`)
    } else {
        console.log(`Bought furniture:`)
        console.log(`Total money spend: ${result.toFixed(2)}`)
    }


}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)
// solve(['>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase']
// )