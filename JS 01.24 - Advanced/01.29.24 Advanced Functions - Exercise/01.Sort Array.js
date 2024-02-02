function solve(arr, command) {

    if (command == `asc`) {
        sortByAsc(arr)
    } else if (command == `desc`) {
        sortByDesc(arr)
    }

    return arr

    function sortByAsc(input) {
        let result = input.sort((a,b) => a - b)
        return result;
    }
    
    function sortByDesc(input){
        let result = input.sort((a, b) => b - a)
        return result;
    }
}



console.log(solve([14, 7, 17, 6, 8], 'asc'))
console.log(solve([14, 7, 17, 6, 8], 'desc'))