function solve(arr) {
    let addressBook = {}

    for ( let token of arr){
        let [name, address] = token.split(`:`)
        addressBook[name] = address
        
    }
   let addressBookToArr = Object.entries(addressBook)
   addressBookToArr.sort((a, b) => a[0].localeCompare(b[0]))

   for ( let token of addressBookToArr ){
    let [name, address] = token
    console.log(name, `->`,address)
   }

}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)