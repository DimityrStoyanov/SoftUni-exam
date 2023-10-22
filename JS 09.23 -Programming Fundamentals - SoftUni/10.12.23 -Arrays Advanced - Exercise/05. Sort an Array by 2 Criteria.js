function solve(arr) {
let result = [];
arr.sort(); - arr.sort((a, b) => a.length- b.length)
// for ( let name of arr){
//     let length = name.length
//     console.log(length);

// }
console.log(arr.join(`\n`));
}
// solve(['alpha', 'beta', 'gamma'])
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])