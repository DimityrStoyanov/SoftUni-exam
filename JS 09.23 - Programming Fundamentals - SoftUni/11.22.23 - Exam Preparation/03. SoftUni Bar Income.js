function solve(arr) {
    let order = arr.shift();
    let sum = 0;

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/

    while (order !== `end of shift`) {
        let match = order.match(pattern);
        if (match) {
            let { customer, product, count, price } = match.groups
            let totalPrice = Number(count) * Number(price)
            sum += totalPrice
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`)
        }
        order = arr.shift();
    }
    console.log(`Total income: ${sum.toFixed(2)}`)
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
solve(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
)