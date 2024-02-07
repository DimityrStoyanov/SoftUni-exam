class Rectangle {

    wight;
    height;

    constructor(width, height) {
        this.height = height;
        this.wight = width
    }

    calcArea() {
        let area = this.wight * this.height
        return area
    }
}

let result = new Rectangle(3, 5);//извикваме класа с подадените параметри.
console.log(result)
console.log(result.calcArea())  //извикваме функция