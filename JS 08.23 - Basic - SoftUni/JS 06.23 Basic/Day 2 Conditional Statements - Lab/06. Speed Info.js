function speedInfo(input){
    let numA = Number(input[0]);

    if (numA > 1000) {
        console.log("extremely fast")
    } else if (numA > 150) {
        console.log("ultra fast")
    }else if (numA > 50) {
        console.log("fast" )
    }else if (numA > 10) {
        console.log("average")
    }else 
        console.log("slow")
    
}
speedInfo(["123"])

// •	При скорост до 10 (включително) отпечатайте "slow"
// •	При скорост над 10 и до 50 (включително) отпечатайте "average" 
// •	При скорост над 50 и до 150 (включително) отпечатайте "fast"
// •	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
// •	При по-висока скорост отпечатайте "extremely fast"
