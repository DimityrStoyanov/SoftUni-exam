function solve(arr) {

arr.sort((a ,b) => a.length - b.length || a.localeCompare(b))
arr.forEach(element => {
    console.log(element)
});
}
console.log(solve(['alpha',
    'beta',
    'gamma']
))
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

))
console.log(solve(['test',
    'Deny',
    'omen',
    'Default']
))