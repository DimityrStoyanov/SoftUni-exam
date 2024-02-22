function movieDay (input){
    let timeForPictures = Number(input[0]);
    let count = Number(input[1]);
    let numbers = Number(input[2]);

    let totalTime = (count * numbers) + timeForPictures * 0.15
    if ( timeForPictures > totalTime){
        console.log(`You managed to finish the movie on time! You have ${(timeForPictures - totalTime).toFixed(0)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${(totalTime - timeForPictures).toFixed(0)} minutes.`)
    }

}
movieDay(["120",
"10",
"11"])
