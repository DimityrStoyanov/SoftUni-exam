class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse
        this.location = location
        this.productStock = []
    }

    addProduct(productName, size, quantity, price) {
        let product = {
            productName: productName,
            size: size,
            quantity: quantity,
            price: price
        }

        let productForSearch = this.productStock.find(obj => obj.productName === productName && obj.size === size)
        if (productForSearch) {
            productForSearch.quantity += quantity
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        } else {
            this.productStock.push(product)
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }

    sendProduct(productName, size) {
        let productForSearch = this.productStock.find(obj => obj.productName === productName && obj.size === size)
        if (productForSearch) {
            let index = this.productStock.indexOf(productForSearch);
            this.productStock.splice(index, 1)
            return `The product ${productName}, size ${size} was successfully removed from the inventory`
        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        }
    }

    findProductsBySize(size) {
        let resultArr = []
        let result = ``
        for (let token of this.productStock) {
            if (token.size == size) {
                result += `${token.productName}-${token.quantity} pieces,`
            }
        }
        if (result == ``) {
            return `There are no products available in that size`
        } else {
            return result.slice(0, -1);
        }
    }

    listProducts() {
        let result = `${this.storehouse} storehouse in ${this.location} available products: \n`
        this.productStock.sort((a, b) => a.productName.localeCompare(b.productName))
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`
        } else {
            for (let token of this.productStock) {
                let info = `${token.productName}/Size:${token.size}/Quantity:${token.quantity}/Price:${token.price}$\n`
                result += info
            }
        }
        return result.slice(0, -1)

    }

}
// Input 1
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));


// Input 2
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// Input 3
// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());

