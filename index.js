
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

const newestMovies = movies.filter((movie) => {

    return movie.year > 2014

})

const filterLatestMovies = () => {

    addMoviesToDom(newestMovies);
}


const filteredMovies = wordInMovie =>

    addMoviesToDom(movies.filter((movie) => movie.title.includes(wordInMovie)));



// addMoviesToDom(movieGenders);



//console.log(filteredMovies("Avengers"));



const handleOnChangeEvent = (event) => {
    radioBtns.forEach((radiobtn) => {
        radiobtn.addEventListener('change', (event) => {

            switch (event.target.value) {
                case "new-movies":
                    console.log(movieList);
                    filterLatestMovies();
                    break;
                case "avengers":
                    let li = movieList.getElementsByTagName('li');
                    console.log(li);
                    //movieList.removeChild(li);
                    filteredMovies("Avengers");
                    break;
                case "x-men":
                    filteredMovies("X-Men");
                    break;
                case "princess":
                    filteredMovies("Princess");
                    break;
                case "batman":
                    filteredMovies("Batman");
                    break;
                case "all-movies":
                    addMoviesToDom(movies);
                    break;
                default:
                    addMoviesToDom(movies);
                    break;
            }

        })

    })
}


handleOnChangeEvent(event);
