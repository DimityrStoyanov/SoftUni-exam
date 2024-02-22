function login(input) {
    ;
    let user = input[0];
    let splitUser = user.split(``)
    let reverseUser = splitUser.reverse();
    let join = reverseUser.join(``)

    for (let i = 1; i <= 4; i++) {
        let pass = input[i];
        if (pass == join) {
            console.log(`User ${user} logged in.`)
            break;
        } else if (i == 4) {
            console.log(`User ${user} blocked!`)
        } else if (pass !== join) {
            console.log("Incorrect password. Try again.")
        } else {

        }
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])