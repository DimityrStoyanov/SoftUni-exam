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
    

    for ( let tokens of arr){
        let employeeName = tokens
        let personalNum = tokens.length
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
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)