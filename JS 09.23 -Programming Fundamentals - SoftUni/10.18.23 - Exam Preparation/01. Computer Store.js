function solve(arr) {
    let price = 0;
    for (let elements of arr) {
        let taxes = price * 0.2;
        let totalPrice = 0;
        let discount = 0;

        if (elements == `regular`) {
            if (price == 0) {
                console.log(`Invalid order!`);
                continue
            }
            totalPrice = taxes + price
            console.log(`Congratulations you've just bought a new computer! \nPrice without taxes: ${price.toFixed(2)}$ \nTaxes: ${taxes.toFixed(2)}$ \n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
            return
        } else if (elements == `special`) {
            if (price == 0) {
                console.log(`Invalid order!`);
                continue
            }
            discount = (taxes + price) * 0.1
            totalPrice = taxes + price - discount
            console.log(`Congratulations you've just bought a new computer! \nPrice without taxes: ${price.toFixed(2)}$ \nTaxes: ${taxes.toFixed(2)}$ \n-----------\nTotal price: ${totalPrice.toFixed(2)}$`);
            return
        }

        if ( Number(elements) < 0 ){
            console.log(`Invalid price!`);
            continue
        }

        price += Number(elements)
    }

}
solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
solve([
    'regular'
    ])
    