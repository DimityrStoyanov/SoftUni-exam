
class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        if (number instanceof Hex) {
            number = number.valueOf();
        }
        return new Hex(this.value + number);
    }

    minus(number) {
        if (number instanceof Hex) {
            number = number.valueOf();
        }
        return new Hex(this.value - number);
    }

    static parse(string) {
        return parseInt(string, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString()); // 0XFF

let a = new Hex(10);
let b = new Hex(5);

console.log(a.plus(b).toString()); // 0XF
console.log(a.plus(b).toString() === '0xF'); // true

console.log(Hex.parse('AAA')); // 2730