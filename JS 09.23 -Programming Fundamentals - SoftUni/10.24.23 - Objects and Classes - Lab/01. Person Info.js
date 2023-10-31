function personalInfo(firstName, lastName, age) {
    
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age

    }

    class Person {
        constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        }
    }

    let mitko = new Person(firstName, lastName, age)
    console.log(mitko);

    return person
}
personalInfo(`mitko`, `stoyanov`, 33)
