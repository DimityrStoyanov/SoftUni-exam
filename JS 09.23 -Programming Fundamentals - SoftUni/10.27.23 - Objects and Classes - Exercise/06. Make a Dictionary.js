function solve(arr) {
    class Item {
        constructor(term, definition) {
            this.term = term;
            this.definition = definition;
        }

        print() {
            console.log(`Term: ${this.term} => Definition: ${this.definition}`);
        }
    }
    let result = {}
    for (let info of arr) {
        let obj = JSON.parse(info)
        let key = Object.keys(obj)
        let value = Object.values(obj)
        let objKey = key.shift()
        let objValue = value.shift()
        // let result = new Item(objKey, objValue)
        result[objKey] = { term: objKey, definition: objValue }
        // result.print()
    }
    let keys = (Object.keys(result)).sort()

    let finalObject = {};
    for (let key of keys) {
        console.log(`Term: ${key} => Definition: ${(result[key][`definition`])}`);
    }


}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)