function solve(arr) {
    let numOfBarcodes = Number(arr.shift())
    let pattern = /(@#+)(?<word>[A-Z][a-zA-Z0-9]{4,}[A-Z])\1/g;

    for (let barcode of arr) {
        let result = [];
        let valid = false
        let product;
        let maches = barcode.matchAll(pattern)
        for (let info of maches) {
            let token = info.groups;
            product = token.word
            valid = true
        }


        if (valid == true) {
            for (let i = 0; i < product.length; i++) {
                let num = Number(product[i])
                if (num > -1 && num < 10) {
                    result.push(num)
                }
            }
        }

        if (result.length > 0) {
            let text = result.join(``)
            console.log(`Product group: ${text}`)
        } else if (valid == true && result.length == 0) {
            console.log(`Product group: 00`)
        } else if (valid == false) {
            console.log(`Invalid barcode`)
        }
    }
}
solve((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
)
solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
)