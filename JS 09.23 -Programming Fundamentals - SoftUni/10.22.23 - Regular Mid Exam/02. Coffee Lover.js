function solve(arr) {
    let coffees = arr.shift().split(` `)
    let num = Number(arr.shift())


    for (let commands of arr) {
        let element = commands.split(` `)
        let action = element.shift()
        if (action == `Include`) {
            let newCoffee = element.shift()
            coffees.push(newCoffee)
        } else if (action == `Remove`) {
            let command = element.shift()
            let count = Number(element.shift())
            if (count > coffees.length) {
                continue
            }
            if (command == `first`) {
                for (let i = 1; i <= count; i++) {
                    coffees.shift()
                }
            } else if (command == `last`) {
                for (let i = 1; i <= count; i++) {
                    coffees.pop()
                }
            }
        } else if (action == `Prefer`) {
            let firstNum = Number(element.shift())
            let secondNum = Number(element.shift())

            if (firstNum >= coffees.length && secondNum >= coffees.length) {
                continue
            } else {
                [coffees[firstNum], coffees[secondNum]] = [coffees[secondNum], coffees[firstNum]]

            }
        } else if (action == `Reverse`) {
            coffees.reverse();
        }
    }
    console.log(`Coffees:\n${coffees.join(` `)}`);
}
solve(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])