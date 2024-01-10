function solve(array){
     let movies = [];

     for (let command of array){
        if (command.includes('addMovie')){
            let movieName = command.split('addMovie ')[1];
            let movieObject = {
                name: movieName
            }
            movies.push(movieObject);
        }
        else if (command.includes('directedBy')){
            let [movieName, directorName] = command.split(' directedBy ');

            let movie = movies.find(movie => movie.name == movieName);
            
            if (movie){
                movie.director = directorName;
            }
        }
        else if (command.includes('onDate')){
            let [movieName, date] = command.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie){
                movie.date = date;
            }
        }
     }
     for (let movie of movies){
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
     }
}