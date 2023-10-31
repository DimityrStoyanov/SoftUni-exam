function solve(arr) {

    class Cat {
        name;
        count;

        constructor(name, count) {
            this.name = name
            this.count = count
        }

        meow() {
            console.log(`${this.name}, age ${this.count} says Meow`)
        }
    }
    let cats = [];

    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].split(` `);
        let name = data[0];
        let count = Number(data[1]);
        let cat = new Cat(name, count);
        cat.meow()
    }

}
solve(['Mellow 2', 'Tom 5'])

