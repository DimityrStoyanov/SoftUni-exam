function password(input){
    let user = input[0]
    let pass = input[1]
    let index = 2;
    let password = input[index]
    index++

    while ( password !== pass){
        password = input[index];
        index++
    }
    if ( password !== pass){
        console.log(`Try other password!`)
    
    } else{
        
    }
    console.log(`Welcome ${user}!`)

}
password(["Gosho",
"secret",
"333123",
"1233",
"1233",
"secret"])
