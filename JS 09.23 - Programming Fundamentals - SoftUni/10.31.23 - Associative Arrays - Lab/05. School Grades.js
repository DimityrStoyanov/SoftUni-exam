function solve(arr) {
    let myObj = {};
    let grades = {};
    for (let info of arr) {
        let token = info.split(` `)
        let name = token.shift()
        let avr = 0;
        let count = 0;
        for ( let grade of token){
            avr += Number(grade)
        }
        avg = avr / token.length
        if (!myObj.hasOwnProperty(name)){
            myObj[name] = avg
        } else {
            myObj[name] = (avg + myObj[name])/2
        }

    }
    let objAsArr = Object.entries(myObj);
    objAsArr.sort()
    for ( let info of objAsArr){
        let [name, avr] = info
        console.log(`${name}: ${avr.toFixed(2)}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)