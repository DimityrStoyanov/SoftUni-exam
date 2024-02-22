function solve(arr) {
    let movies = [];

    for (let command of arr) {
        if (command.includes(`addMovie`)) {
            let movieName = command.split(`addMovie `)[1]
            let obj = { name: movieName }
            movies.push(obj)
            console.log(obj);
        } else if (command.includes(`directedBy`)) {
            let token = command.split(` directedBy `)
            let movieName = token[0];
            let directorName = token[1];
            let movie = movies.find(movies => movies.name == movieName)
            console.log(movie);
            if (movie) {
                movie.director = directorName
            }
        } else if (command.includes(`onDate`)) {
            let token = command.split(` onDate `)
            let movieName = token[0];
            let date = token[1];
            let movie = movies.find(movies => movies.name == movieName)
            if (movie) {
                movie.date = date
            }
        }

    }

    for (let movie of movies) {

        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    }

}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
// solve()