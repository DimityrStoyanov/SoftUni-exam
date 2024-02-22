function solve(steps, footprint, speed) {
    let distance = footprint * steps;
    let speedMetersInSec = speed / 3.6;

    let time = distance / speedMetersInSec;
    let rest = Math.floor(distance / 500);

    let min = ((Math.floor(time / 60)) + rest).toFixed(0)
    let hours = (Math.floor(time / 3600)).toFixed(0);
    let second = (time % 60).toFixed(0)

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (min < 10){
        min = `0${min}`
    }

    if ( second < 10){
        second = `0${second}`
    }
    console.log(`${hours}:${min}:${second}`)

}
solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)
