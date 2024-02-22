class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength
    }

    decrease(num) {
        if (num > this.innerLength) {
            this.innerLength = 0
        } else {
            this.innerLength -= num
        }



    }

    increase(num) {
        this.innerLength += num
    }
    toString() {
        if ( this.innerLength >= this.innerString.length){
            return this.innerString.substring(0, this.innerLength)
        } else {
        return this.innerString.substring(0, this.innerLength) + "..."
        }
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
