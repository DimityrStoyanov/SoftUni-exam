class WineSelection {

    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        let wine = {
            wineName: wineName,
            wineType: wineType,
            price: price,
            paid: false
        }

        if (this.space > 0) {
            this.wines.push(wine)
            this.space -= 1;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        } else {
            throw new Error("Not enough space in the cellar.")
        }
    }

    payWineBottle(wineName, price) {
        //  let objectToUpdate = this.products.find(obj => obj.product === product)
        let theWine = this.wines.find(obj => obj.wineName === wineName)
        // Това е начина да се намери конкретния обект в масива. Взето е от друга задача.
        if (!theWine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if (theWine.paid) {
            throw new Error(`${wineName} has already been paid.`)
        } else {
            theWine.paid = true;
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`
        }
    }

    openBottle(wineName) {
        let theWine = this.wines.find(obj => obj.wineName === wineName)

        if (!theWine) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }

        if (!theWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        let index = this.wines.indexOf(theWine);
        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        if (wineType) {
            let theWine = this.wines.find(obj => obj.wineType === wineType)
            if (theWine) {
                if (theWine.paid) {
                    return `${theWine.wineName} > ${theWine.wineType} - Has Paid.`
                } else {
                    return `${theWine.wineName} > ${theWine.wineType} - Not Paid.`
                }
            } else {
                return `There is no ${wineType} in the cellar.`
            }
        } else {
            let result = ``
            result += `You have space for ${this.space} bottles more.\n`
            result += `You paid ${this.bill}$ for the wine.\n`

            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            let wines = this.wines;
            for (let wine of wines) {
                let payedOrNot = ``
                if (wine.paid) {
                    payedOrNot = `Has Paid`
                } else {
                    payedOrNot = `Not Paid`
                }
                result += `${wine.wineName} > ${wine.wineType} - ${payedOrNot}.\n`

            }

            return result.slice(0,-1)
        }
    }
}

const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));

