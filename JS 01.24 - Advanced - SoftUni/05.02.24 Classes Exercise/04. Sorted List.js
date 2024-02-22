class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(num) {
        this.arr.push(num);
        this.arr.sort((a, b) => a - b)
        this.size++
    }

    remove(num) {
        if (this.arr.length <= num || num < 0) {
            throw new Error("Incorrect index!")
        } 
        this.arr.splice(num, 1);
        this.arr.sort((a, b) => a - b);
        this.size--
    }

    get(num) {
        if (this.arr.length <= num || num < 0) {
            throw new Error("Incorrect index!")
        }
        return this.arr[num];

    }
}

let list = new List();

list.add(5);
list.add(6);
list.add(3);
list.add(10);
list.add(9);
console.log(list)
list.remove(4)
console.log(list)
console.log(list.get(2))
console.log(list.get(3))
console.log(list.size)
// console.log(list.get(1)); 
