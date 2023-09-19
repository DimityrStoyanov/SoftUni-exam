function favoriteMovie(input) {
    let movie = ``;
    let bestPts = 0;
    let bestMovie = ``;
    let movieCount = 0;
    for (let i = 0; i < input.length; i++) {
        let pts = 0;
        movie = input[i];
        movieCount ++
        let movieLength = movie.length
        let bigOne = 0;
        let smallOne = 0;
        for (let b = 0; b < movieLength; b++) {
            let char = movie[b];
            pts += char.codePointAt()
            let smallChar = char.toLowerCase();
            if (smallChar !== char) {
                bigOne++
            } else if (smallChar == char){
                smallOne++
            }

            if(char === " "){
                smallOne--
            }
        }
        pts = pts - (smallOne * movieLength * 2 + bigOne * movieLength)
        if ( pts > bestPts){
            bestMovie = movie
            bestPts = pts
        } 
        if ( movieCount >= 7 && input[i] !== "STOP"){
            console.log("The limit is reached.")
            console.log(`The best movie for you is ${bestMovie} with ${bestPts} ASCII sum.`)
        }
        if ( input[i] === "STOP"){
            console.log(`The best movie for you is ${bestMovie} with ${bestPts} ASCII sum.`)
        }
       
       
        


    }
    
}
    favoriteMovie(["Matrix",
        "Breaking bad",
        "Legend",
        "STOP"])
