
function echoType(type){
    let result = typeof type
    console.log(result)

    if( result == "string" || result == "number"){
        console.log(type)
    }else {
        console.log('Parameter is not suitable for printing')
    }
}


echoType('Hello, JavaScript!')
echoType(18)
echoType(null)
// let a = 1;
// console.log( typeof a)

// let b = `Mitko`
// console.log( typeof b)

// let c = undefined
// console.log( typeof c)