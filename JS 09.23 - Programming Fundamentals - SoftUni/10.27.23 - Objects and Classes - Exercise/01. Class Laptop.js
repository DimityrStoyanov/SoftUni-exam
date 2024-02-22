
class Laptop {
   
    constructor(info, quality) {
        this.info = info
        this.quality = quality
        this.isOn = false;
        this.price = 0

    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1
        this.price = 800 - this.info.age * 2 + this.quality * 0.5
        return
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1
        this.price = 800 - this.info.age * 2 + this.quality * 0.5
        return
    }
    showInfo() {
        let newInfo = JSON.stringify(laptop.info)
        return newInfo
    }

    

}

let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)




// let info = { producer: "Lenovo", age: 1, brand: "Legion" }
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// laptop.turnOn()
// laptop.turnOff()
// console.log(laptop.isOn)

