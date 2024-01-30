function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputs = document.querySelector("textarea").value;
      inputs = JSON.parse(inputs);
      let result = []
      for (info of inputs) {
         let restourants = {
            name: undefined,
            avrSalary: 0,
            bestSalary: 0,
            workers: []
         }
         let [name, infoForWorkers] = info.split(` - `)
         restourants.name = name

         let counter = 0;
         let sum = 0;


         let token = infoForWorkers.split(`, `)
         for (let nameAndSalary of token) {
            let worker = {
               name: ``,
               salary: 0
            }
            let [name, salary] = nameAndSalary.split(" ")
            salary = Number(salary)
            sum += salary
            counter++
            if (restourants.bestSalary < salary) {
               restourants.bestSalary = salary
            }
            worker.name = (name)
            worker.salary = (salary)
            restourants.workers.push(worker)
         }
         restourants.avrSalary = sum / counter;

         result.push(restourants)

      }
      result.sort((a, b) => b.avrSalary - a.avrSalary);

      let bestRestourant = `Name: ${result[0].name} Average Salary: ${(result[0].avrSalary).toFixed(2)} Best Salary: ${(result[0].bestSalary).toFixed(2)}`

      result[0].workers.sort((a, b) => b.salary - a.salary);

      let workersInBestRestourant = ``
      let workers = result[0].workers
      for (let token of workers) {
         let name = token.name;
         let salary = token.salary;
         let info = `Name: ${name} With Salary: ${salary} `
         workersInBestRestourant += info
      }

      document.querySelector("#bestRestaurant p").innerText = bestRestourant
      document.querySelector("#workers p").innerText = workersInBestRestourant
   }

}






//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]

