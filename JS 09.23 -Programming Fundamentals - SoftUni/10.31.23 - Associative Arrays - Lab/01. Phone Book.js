function solve(arr) {

    let phoneBook = {};

    for ( let token of arr){
        let [key, value] = token.split(` `)
        phoneBook[key] = value
        // console.log(`${key} -> ${value}`);
    }
    // console.log(phoneBook);

    for ( let name in phoneBook){
        console.log(name, `->`, phoneBook[name])
    }

}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)