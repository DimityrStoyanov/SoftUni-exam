function solve(arr1, operator) {
    let newArrIndex = operator[0];
    let elementsToDel = operator[1];
    let numToSearch = operator[2];

    let newArr = arr1.slice(0, newArrIndex);
    newArr.splice(0, elementsToDel)
    let sum = 0
    for (let num of newArr) {
        if (numToSearch == num) {
            sum++
        }
    }
    console.log(`Number ${numToSearch} occurs ${sum} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)
solve([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)