function solve(arr) {
    let maxCap = 4;
    let waitings = Number(arr[0]);
    let currentStats = arr[1].split(` `).map(Number)
    let result = []

    for (let i = 0; i < currentStats.length; i++) {
        for (let j = currentStats[i]; j < 4; j++) {
            waitings -= 1
            currentStats[i] += 1
            if (waitings == 0) {
                break;
            }
        }
        if (waitings == 0) {
            break;
        }
    }
    let free = 0;
    for (let freeSpace of currentStats) {
        if (freeSpace !== 4) {
            free++
        }
    }

    if (waitings == 0 && free == 0) {
        console.log(`${currentStats.join(` `)}`)
    } else if (waitings > 0) {
        console.log(`There isn't enough space! ${waitings} people in a queue!\n${currentStats.join(` `)}`
        );
    } else {
        currentStats = currentStats.filter(element => element !== 0)
        console.log(`The lift has empty spots!\n${currentStats.join(` `)}`
        );

    }
}
solve([
    "15",
    "0 0 0 0 0"
])
solve([
    "20",
    "0 2 0"
]
)
solve(["8", "2 2 1 3"])
solve(["10", "2 3 2"])
solve(["10", "2 3 2 0 0 0"])