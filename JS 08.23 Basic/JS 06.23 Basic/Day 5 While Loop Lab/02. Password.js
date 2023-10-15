function password(input){
    let user = input[0];
    let pass = input [1];

    let data = input[2];
    let index = 2;

    while (data !== pass){
        data = input[index]
        index++
    }
    console.log(`Welcome ${user}!`);
}
password(["Gosho",
"secret",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"mitko",
"petkan",
"drago",
"chpcho",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
"ivan",
""])
