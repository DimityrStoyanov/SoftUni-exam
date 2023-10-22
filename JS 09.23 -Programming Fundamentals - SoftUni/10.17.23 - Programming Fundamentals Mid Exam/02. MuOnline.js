function solve(input) {
    let arr = input.split(`|`);

    let health = 100;
    let bitcoin = 0;
    let countRoom = 0;

    for (let room of arr) {
        countRoom++
        let separate = room.split(` `)
        let action = separate[0]
        let num = Number(separate[1])
        if (action == `potion`) {
            if (health + num >= 100) {

                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            } else {
                health += num
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
            }

        } else if (action == `chest`) {
            bitcoin += num
            console.log(`You found ${num} bitcoins.`);
        } else {
            health -= num
            if (health <= 0) {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${countRoom}`);
                break;
            } else {

                console.log(`You slayed ${action}.`);
            }
        }
        if (countRoom == arr.length) {
            console.log(`You've made it!`);
            console.log(`Bitcoins: ${bitcoin}`);
            console.log(`Health: ${health}`);
        }
    }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")