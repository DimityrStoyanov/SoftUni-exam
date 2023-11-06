function solve(arr) {
    let myObj = {};

    for (let car of arr) {
        let [action, reg] = car.split(`, `)
        if (action == `IN`) {
            myObj[reg] = 1
        } else if (action == `OUT`){
            delete myObj[reg]
        }
    }
    let result = Object.keys(myObj).sort()
    for ( let reg of result){
        console.log(reg);
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)