function cityTaxes(name, population, treasury) {

    let result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(perc) {
            this.population += Math.floor(this.population * (perc / 100))

        },
        applyRecession(perc) {
            this.treasury -= Math.floor(this.treasury * (perc / 100))


        }

    }
    return result
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10)
console.log(city.treasury);

