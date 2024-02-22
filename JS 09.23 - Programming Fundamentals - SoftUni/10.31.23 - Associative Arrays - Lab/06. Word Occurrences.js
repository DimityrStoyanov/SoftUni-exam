function solve(arr) {
    let myObj = {};
    for (let parts of arr) {
        if (!myObj.hasOwnProperty(parts)) {
            myObj[parts] = 1;
        } else {
            myObj[parts] += 1
        }
    }
    let myArr = Object.entries(myObj)
    myArr.sort((a, b) => b[1] - (a[1]))
    
    for ( let result of myArr){
        let [name, count] = result;
        console.log(`${name} -> ${count} times`)
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])