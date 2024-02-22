class Company {
    constructor() {
        this.obj = {}
    }

    addEmployee(name, salary, position, department) {
        salary = Number(salary)
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input")
        } else if (salary < 0) {
            throw new Error("Invalid input!")
        }

        if (!this.obj[department]) {
            this.obj[department] = {
                avg: 0,
                sumSalary: 0,
                employees: []
            }
        }

        this.obj[department].employees.push({
            name: name,
            salary: salary,
            position: position
        })

        this.obj[department].sumSalary += salary
        let count = this.obj[department].employees.length
        this.obj[department].avg = this.obj[department].sumSalary / count
        return `New employee is hired. Name: ${name}. Position: ${position}`


    }

    bestDepartment() {

        let myArr = Object.entries(this.obj)
        myArr.sort((a, b) => b[1].avg - a[1].avg)

        let employeeArr = Object.entries(myArr[0][1].employees)
        employeeArr.sort((a, b) => b[1].salary - a[1].salary || a[1].name.localeCompare(b[1].name))
        let result = `Best Department is: ${myArr[0][0]}\n`
        result += `Average salary: ${(myArr[0][1].avg).toFixed(2)}\n`
        for (let person of employeeArr) {
            let tokens = person[1];
            let { name, salary, position } = tokens
            result += `${name} ${salary} ${position}\n`
        }

        return result.trim();
    }
}




let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());
