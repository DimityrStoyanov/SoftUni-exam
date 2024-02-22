function solve(name, lastName, hairColor) {

    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }
    let jsonPerson = JSON.stringify(person) 
    console.log(jsonPerson);

}
solve('George', 'Jones', 'Brown')