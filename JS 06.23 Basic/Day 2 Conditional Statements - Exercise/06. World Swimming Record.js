function record(input){
  let worldrecord = Number(input[0]);
  let distanceM = Number(input[1]);
  let secondsforM = Number(input[2]);
  let waterresistance = (Math.floor(distanceM / 15)) * 12.5
  let totalTime = distanceM * secondsforM + waterresistance
  
  if (totalTime > worldrecord){
    console.log(`No, he failed! He was ${(totalTime - worldrecord).toFixed(2)} seconds slower.`)
  } else {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
  }

  
}
record(["55555.67",
"3017",
"5.03"])
