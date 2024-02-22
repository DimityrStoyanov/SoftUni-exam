class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        let currentDepartment = this.departments.find(d => d.name === department);
        if (!currentDepartment) {
            currentDepartment = { name: department, employees: [] };
            this.departments.push(currentDepartment);
        }

        currentDepartment.employees.push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        this.departments.forEach(department => {
            department.averageSalary = department.employees.reduce((acc, e) => acc + e.salary, 0) / department.employees.length;
        });

        const bestDepartment = this.departments.sort((a, b) => b.averageSalary - a.averageSalary)[0];
        let result = `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary.toFixed(2)}\n`;

        bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name)).forEach(e => {
            result += `${e.name} ${e.salary} ${e.position}\n`;
        });

        return result.trim();
    }
}


let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
