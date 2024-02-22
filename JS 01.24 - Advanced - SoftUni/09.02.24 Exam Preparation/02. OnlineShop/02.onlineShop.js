class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.")
        } else {
            let token = {
                product: product,
                quantity: quantity
            }
            this.products.push(token)
            this.warehouseSpace -= spaceRequired
        }
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {

        let result = 1;
        for (let token of this.products) {
            if (token.product == product) {
                result = 2;
            }
        }
        if (result == 1) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }


        let objectToUpdate = this.products.find(obj => obj.product === product)
        if (minimalQuantity <= objectToUpdate.quantity) {
            return `You have enough from product ${product}.`
        } else {
            let difference = minimalQuantity - objectToUpdate.quantity
            objectToUpdate.quantity = minimalQuantity

            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        let result = 1;
        for (let token of this.products) {
            if (token.product == product) {
                result = 2;
            }
        }
        if (result == 1) {
            throw new Error(`There is no ${product} in the warehouse.`)
        } else {
            let objectToUpdate = this.products.find(obj => obj.product === product)
            objectToUpdate.quantity -= 1
            this.sales.push({
                product: product,
                quantity: 1
            }
            )
            return `The ${product} has been successfully sold.`

        }
    }

    revision() {
        let result = ``
        if (this.sales.length == 0) {
            throw new Error(`There are no sales today!`)
        } else {
            result = `You sold ${this.sales.length} products today!\n Products in the warehouse:\n`
            for (let token of this.products) {
                let ressultToPush = ``;
                let product = token.product;
                let quantity = token.quantity;
                ressultToPush = `${product}-${quantity} more left\n`
                result += ressultToPush

            }
        }
        return result.slice(0, -1);


    }
}



/* ---- 1st input
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('TV', 40, 100));
*/


/* ------- 2nd input
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('radio', 5, 50));

console.log(myOnlineShop.quantityCheck('headphones', 5));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('radio', 15));
console.log(myOnlineShop.quantityCheck('TV', 40,));
*/

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

console.log(myOnlineShop.revision());


