function solve(num, list1, list2, list3, list4, list5) {
    let myNum = Number(num);
    let result = myNum;
    switch (list1) {
        case `chop`: result = result / 2; break;
        case `dice`: result = Math.sqrt(result); break;
        case `spice`: result = result + 1; break;
        case `bake`: result = result * 3; break;
        case `fillet`: result = result * 0.80; break;
    }
    console.log(result)

    switch (list2) {
        case `chop`: result = result / 2; break;
        case `dice`: result = Math.sqrt(result); break;
        case `spice`: result = result + 1; break;
        case `bake`: result = result * 3; break;
        case `fillet`: result = result * 0.80; break;
    }
    console.log(result)
    switch (list3) {
        case `chop`: result = result / 2; break;
        case `dice`: result = Math.sqrt(result); break;
        case `spice`: result = result + 1; break;
        case `bake`: result = result * 3; break;
        case `fillet`: result = result * 0.80; break;
    }
    console.log(result)
    switch (list4) {
        case `chop`: result = result / 2; break;
        case `dice`: result = Math.sqrt(result); break;
        case `spice`: result = result + 1; break;
        case `bake`: result = result * 3; break;
        case `fillet`: result = result * 0.80; break;
    }
    console.log(result)
    switch (list5) {
        case `chop`: result = result / 2; break;
        case `dice`: result = Math.sqrt(result); break;
        case `spice`: result = result + 1; break;
        case `bake`: result = result * 3; break;
        case `fillet`: result = result * 0.80; break;
    }
    console.log(result)

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
