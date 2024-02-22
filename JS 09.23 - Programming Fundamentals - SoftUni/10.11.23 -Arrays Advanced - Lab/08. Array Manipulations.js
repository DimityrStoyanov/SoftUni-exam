function solve(commands) {
    let arr = commands.shift().split(` `).map(Number)

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(` `)
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case `Add`: arr.push(firstNum); break;
            case `Remove`: arr= arr.filter(element => element !== firstNum); break;
            case `RemoveAt`: arr.splice(firstNum, 1); break;
            case `Insert`: arr.splice(secondNum, 0, firstNum);break;
        }
    }
    console.log(arr.join(` `));
    // 4 53 6 8 43 3
}
solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']
)
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index

