function solve(arr) {
    let workersProductPerDay = Number(arr[0])
    let workersCount = Number(arr[1])
    let otherFactory = Number(arr[2]) //for 30 days
    let countBiscuits = 0;

    for (let i = 1; i <= 30; i++) {
        let totalProductPerDay = workersProductPerDay * workersCount
        if (i % 3 == 0) {
            totalProductPerDay = Math.floor(totalProductPerDay * 0.75)
            countBiscuits += totalProductPerDay
        } else {
            countBiscuits += totalProductPerDay
        }
    }

    console.log(`You have produced ${countBiscuits} biscuits for the past month.`);
    if (countBiscuits > otherFactory) {
        console.log(`You produce ${(((countBiscuits / otherFactory) - 1) * 100).toFixed(2)} percent more biscuits.`)

    } else {
        console.log(`You produce ${((1 - (countBiscuits / otherFactory)) * 100).toFixed(2)} percent less biscuits.`)

    }
}
solve(["78", "8", "16000"])
solve(["65", "12", "26000"])
solve(["163", "16", "67020"])