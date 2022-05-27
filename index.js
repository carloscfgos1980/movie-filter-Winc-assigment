
let movieList = document.querySelector('#movie-list');

const addMoviesToDom = movies => {

    const allMovies = movies.map((movie) => {

        let movieTitle = document.createElement('li');
        movieTitle.innerHTML = '';
    }
    )

    movies.forEach((movie) => {

        let film = document.createElement('li');
        let image = document.createElement('img');
        image.src = movie.poster;

        const filmId = movie.imdbID;

        let anchorTag = document.createElement('a');
        anchorTag.href = `https://www.imdb.com/title/${filmId}`;


        film.appendChild(anchorTag);
        anchorTag.append(image);
        movieList.appendChild(film);
    }
    )

}

let radioBtns = document.querySelectorAll("input[name='film-filter']");
//console.log(radioBtns);



const newestMovies = movies.filter((movie) => {

    return movie.year > 2014

})

const filterLatestMovies = () => {

    addMoviesToDom(newestMovies);
}



/*
const movieGenders = movies.filter((movie) => {

    const wordInMovie = "Avengers";
    return movie.title.includes(wordInMovie);

})

console.log(movieGenders);

 addMoviesToDom(movieGenders);
*/

// Short version of the function above
const filteredMovies = wordInMovie => addMoviesToDom(movies.filter((movie) => movie.title.includes(wordInMovie)));


//console.log(filteredMovies("Avengers"));
/*
const removedList = () => {

    const li = movieList.getElementsByTagName('li');
    console.log(li);
    //li.parentElement.removeChild(li);
*>>> I didn't work
}
*/
const eraseMovie = () => {

    document.getElementById("movie-list").innerHTML = "";

}

/*
for (const radioBtn of radioBtns) {
    radioBtn.onclick = (e) => {
        console.log(e.target.value);
    }
}

*/

/*
const handleOnChangeEvent = (event) => {
    radioBtns.forEach((radiobtn) => {
        radiobtn.addEventListener('change', (event) => {
            
            console.log(event.target.value)

        })

    })
}


handleOnChangeEvent(event);
*/

const handleOnChangeEvent = (event) => {
    radioBtns.forEach((radiobtn) => {
        radiobtn.addEventListener('change', (event) => {

            switch (event.target.value) {
                case "new-movies":
                    eraseMovie();
                    filterLatestMovies();
                    break;
                case "avengers":
                    eraseMovie();
                    filteredMovies("Avengers");
                    break;
                case "x-men":
                    eraseMovie();
                    filteredMovies("X-Men");
                    break;
                case "princess":
                    eraseMovie();
                    filteredMovies("Princess");
                    break;
                case "batman":
                    eraseMovie();
                    filteredMovies("Batman");
                    break;
                case "all-movies":
                    eraseMovie();
                    addMoviesToDom(movies);
                    break;
            }

        })

    })
}


handleOnChangeEvent(event);

