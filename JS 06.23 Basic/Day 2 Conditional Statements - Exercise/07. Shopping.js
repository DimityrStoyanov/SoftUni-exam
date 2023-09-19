function shoping(input){
    let budget = Number(input[0]);
    let videocardsNMB = Number(input[1]);
    let procesorsNMB = Number(input[2]);
    let ramsNMB = Number(input[3]);

    let videocardCOST = videocardsNMB * 250
    let procesorsCOST = (videocardCOST * 0.35) * procesorsNMB
    let ramsCOST = (videocardCOST * 0.1) * ramsNMB

    let totalCOST = videocardCOST + procesorsCOST + ramsCOST

    if (videocardsNMB > procesorsNMB){
        totalCOST = totalCOST * 0.85
    } else {

    }
    
    if (budget > totalCOST) {
        console.log(`You have ${(budget - totalCOST).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalCOST - budget).toFixed(2)} leva more!`)
    }
}
shoping(["920.45",
"3",
"1",
"1"])
