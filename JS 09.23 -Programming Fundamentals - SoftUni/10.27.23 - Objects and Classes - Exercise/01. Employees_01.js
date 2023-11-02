function solve(arr) {

    class Person {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName
            this.personalNum = personalNum
        }
        print() {
            console.log(`Name: ${this.employeeName} -- Personal Number: ${this.personalNum}`);
        }
        
    }

    for (let name of arr) {
        let employeeName = name
        let personalNum = name.length
        let person = new Person(employeeName, personalNum)
        person.print()
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)