function pyramidOfKing(base, increment) {
    let floors = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let currentFloor = 1;
    for (let i = base; i > 0; i += -2) {
        floors += 1
    }
    for (let b = base; b > 0; b += -2) {
        if (currentFloor == floors) {
            gold = b * b
        } else if (currentFloor % 5 == 0) {
            stone += (b - 2) * (b - 2)
            lapis += (b * b) - (b - 2) * (b - 2)
        } else {
            stone += (b - 2) * (b - 2)
            marble += (b * b) - (b - 2) * (b - 2)
        }
        currentFloor++
    }
    console.log(`Stone required: ${Math.ceil(stone * increment)}`)
    console.log(`Marble required: ${Math.ceil(marble * increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`)
    console.log(`Gold required: ${Math.ceil(gold * increment)}`)
    console.log(`Final pyramid height: ${Math.floor(floors * increment)}`)


}
pyramidOfKing(11,
    0.75
)