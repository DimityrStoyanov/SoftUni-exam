function requestValidator(obj) {

    let validMethod = ["GET", "POST", "DELETE", "CONNECT"]

    if (validMethod.includes(obj.method)) {
        console.log("Valid")
    } else {
        console.log(`Invalid request header: Invalid Method`)
        throw new Error(`Invalid request header: Invalid Method`)
    }
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
})
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
})