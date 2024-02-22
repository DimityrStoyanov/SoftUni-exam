function solve(arr) {
    let myObj = {};
    for (let token of arr) {
        let [item, quantity] = token.split(` `)
        if (!myObj.hasOwnProperty([item])) {
            myObj[item] = quantity
        } else {
            myObj[item] = Number(quantity) + Number(myObj[item])
        }

    }
    let myObjAsArr = Object.entries(myObj)
    for (let result of myObjAsArr) {
        let [item, quantity] = result;
        console.log(item, `->`, quantity);
    }

}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)