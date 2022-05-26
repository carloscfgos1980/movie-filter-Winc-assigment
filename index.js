

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

/*


/*
const movieGenders = movies.filter((movie) => {

    const wordInMovie = "Avengers";
    return movie.title.includes(wordInMovie);

})

console.log(movieGenders);
*/


const filteredMovies = wordInMovie =>

    addMoviesToDom(movies.filter((movie) => movie.title.includes(wordInMovie)));



// addMoviesToDom(movieGenders);



//console.log(filteredMovies("Avengers"));



const handleOnChangeEvent = (event) => {
    radioBtns.forEach((radiobtn) => {
        radiobtn.addEventListener('change', (event) => {

            //console.log(event.target.value)

            switch (event.target.value) {
                case "new-movies":
                    filterLatestMovies();
                    break;
                case "avengers":
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




/*
for (const radioBtn of radioBtns) {
    radioBtn.onclick = (e) => {
        console.log(e.target.value);
    }
}

*/

/*
const handleOnChangeEvent = (event) => {

    radioBtns.addEventListener('change', (event) => {

        switch (event.target.value) {
            case 'new-movies':
                let message1 = 'hello new-movies';
                console.log(message2);
                break;
            case 'avengers':
                let message2 = 'hello avengers';
                console.log(message2);
                break;
            case 'x-men':
                let message3 = 'hello x-men';
                console.log(message3);
                break;
            case 'princess':
                let message4 = 'hello princess';
                console.log(message4);
                break;
            case 'batman':
                let message5 = 'hello batman';
                console.log(message5);
                break;

        }
    })

}

*/
