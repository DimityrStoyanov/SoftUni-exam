function loadingBar(percent){
    let repeetNum = percent / 10
    let status = `..........`
   
    for ( let i = 0; i < repeetNum; i++){
        status = status.replace(status[i], `%`)
    }

    if ( percent == 100){
        console.log(`100% Complete!`);
        console.log(`[${status}]`);
    } else {
        console.log(`${percent}% [${status}]`);
        console.log(`Still loading...`);
    }
   
}
loadingBar(30)
loadingBar(50)
loadingBar(100)