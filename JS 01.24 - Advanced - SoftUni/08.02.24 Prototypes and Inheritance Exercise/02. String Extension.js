(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this
        } else {
            return str + this
        };
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this
        } else {
            return this + str
        }
    }

    String.prototype.isEmpty = function () {
        let result = Boolean
        if (this.length < 1) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }

    String.prototype.truncate = function (n) {
        if ( n < 4 ){
            return ".".repeat(n)
        }

        if ( this.length < n ){
            return this
        }
    }

})()


let str = "asd";
console.log(str.isEmpty());
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.ensureEnd('hello '));
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
console.log(str.truncate(4))
console.log(str.truncate(2));
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');
