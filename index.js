
const movieList = document.querySelector('#movie-list');

const allMovies = movies.map((movie) => {

    const movieTitle = document.createElement('li');
    movieTitle.innerHTML = '';

}
)
movies.forEach((movie) => {

    let film = document.createElement('li');
    let image = document.createElement('img');
    image.src = movie.poster;

    let anchorTag = document.createElement('a');

    anchorTag.href = movie.imdbID;

    const filmId = anchorTag.href;



    film.appendChild(anchorTag);
    anchorTag.append(image);

    movieList.appendChild(film);
}
)

const anchorTag = filmId => `https://www.imdb.com/title/${filmId}`;
