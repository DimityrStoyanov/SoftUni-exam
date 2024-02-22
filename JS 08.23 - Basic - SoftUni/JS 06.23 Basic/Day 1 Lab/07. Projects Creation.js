//"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s.

function projectCreation(input){
    let name = input[0];
    let hours = input[1];
    let numberOfProjects = hours * 3
    console.log(`The architect ${name} will need ${numberOfProjects} hours to complete ${hours} project/s.`)

}

projectCreation(["George ", "4 "])