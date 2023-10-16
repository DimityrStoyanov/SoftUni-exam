function solve(arr) {
    let passangerPerWagon = arr.shift().split(` `).map(Number)
    let cap = Number(arr.shift())

    for (let i = 0; i < arr.length; i++) {
        let [status, passanger] = arr[i].split(` `)
        if (status == "Add") {
            passangerPerWagon.push(Number(passanger));
        } else {
            for (let k = 0; k < passangerPerWagon.length; k++) {
                if (passangerPerWagon[k] + Number(status) <= cap) {
                    passangerPerWagon[k] += Number(status);
                    break;

                }
            }
        }
    }
    console.log(passangerPerWagon.join(` `));
}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)
// 72 54 21 12 4 75 23 10 0