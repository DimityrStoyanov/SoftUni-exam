function solve(arr) {
    let result = [];
    let n = 1;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == "add") {
            result.push(n)
            n++
        } else if (arr[i] == "remove") {
            result.pop();
            n++
        }
    }
    // if (result.length < 1) {
    //     console.log("Empty")
    // } else {
    //     for (let n of result) {
    //         console.log(n)
    //     }
    // }

    return result.length? result.join(`\n`) : "Empty"
}
console.log(solve(['add',
    'add',
    'add',
    'add']

))
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
))
console.log(solve(['remove',
    'remove',
    'remove']
))