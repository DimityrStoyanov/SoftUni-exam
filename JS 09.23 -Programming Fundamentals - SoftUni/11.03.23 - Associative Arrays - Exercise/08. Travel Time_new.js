function solve(input) {
    let destinationsList = {};
    input.forEach(el => {
        let [country, town, price] = el.split(' > ');
        price = Number(price);
        if (!destinationsList.hasOwnProperty(country)) {
            destinationsList[country] = { [town]: price };
        } else {
            if (destinationsList[country].hasOwnProperty(town)) {
                if (price > destinationsList[country][town]) {
                    price = destinationsList[country][town];
                }
            }
            destinationsList[country][town] = price;
        }
    });
    let sortedDestinations = Object.entries(destinationsList).sort((a, b) => a[0].localeCompare(b[0]));
    sortedDestinations.forEach(el => {
        let [country, townAndPrice] = el;
        let sortedTOwns = Object.entries(townAndPrice).sort((a, b) => a[1] - b[1]).map(a => `${a[0]} -> ${a[1]}`).join(' ');
        console.log(`${country} -> ${sortedTOwns}`);
    });
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)