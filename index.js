

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

addMoviesToDom(movies);


let radioBtns = document.querySelectorAll("input[name='film-filter']");
console.log(radioBtns);
/* Here I manage to check that the radio buttons work properly
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

            console.log(event.target.value)

        })
        switch (event.target.value) {
            case "new-movies":
                console.log("hello")
                break;
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
