function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    let m = 1;

    arr.forEach(n => {
        console.log(`${m}.${n}`)
        m++
    });
}
console.log(solve(["John", "Bob", "Christina", "Ema"]))
