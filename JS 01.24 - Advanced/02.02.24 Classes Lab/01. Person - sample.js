class Person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}
let result = new Person("Dimitar", "Stoyanov", 33, "dimityrstoyanov@gmail.com")
console.log(result.toString())
console.log(`-----------`)


// Може да се направи масив от нови класове и да се джойнат по символа за нов ред.
let myArr = [
    new Person("Dimitar", "Stoyanov", 33, "dimityrstoyanov@gmail.com"),
    new Person("Vesi", "Ivanova", 32, "vesity@gmail.com"),
    new Person("Teo", "Stoyanov", 0.5, "none"),
]

console.log(myArr.join(`\n`))

//проверка за това дали обекта е инстанция от този клас:

console.log(myArr[0] instanceof Person) // true;
console.log(myArr[0] instanceof Map) // false;

