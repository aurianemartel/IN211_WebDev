import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Movie from '../../components/Movie/Movie';

const useFetchConfig = () => {
  const [config, setConfig] = useState([]);
  const [configLoadingError, setConfigLoadingError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/configuration?api_key=57359ff087905e870d40ba4880a1dce0`)
      .then((response) => {
        // If call succeeded
        setConfig(response.data);
        console.log(config);
      })
      .catch((error) => {
        // If call failed
        setConfigLoadingError('An error occured while fetching the configuration');
        console.error(error);
      });
  }, []);

  return { config, configLoadingError };
};


const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesLoadingError, setMoviesLoadingError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0`)
      .then((response) => {
        // If call succeeded
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch((error) => {
        // If call failed
        setMoviesLoadingError('An error occured while fetching movies');
        console.error(error);
      });
  }, []);

  return { movies, moviesLoadingError };
};


function Home() {
  const [movieName, setMovieName] = useState("");
  const { movies, moviesLoadingError } = useFetchMovies();
  const { config, configLoadingError } = useFetchConfig();

  return (
    <div className="App">
      <header className="App-header">
        <title> Page d'accueil </title>


        <h1> Films disponibles </h1>

        <input
          type="text"
          id="Movie name input"
          name="Movie name"
          placeholder="Rechercher un film..."
          value={movieName}
          onChange={(event) => setMovieName(event.target.value)}
        />
      </header>

      <h2> Résultats pour "{movieName}" </h2>

      <h2> Films populaires </h2>
      {movies.map((movie) =>
        <li
          className="App-movieList"
          key={movie.id}>
          <Movie
            className="movie"
            title={movie.title}
            date={movie.release_date}
            img={config.images.base_url + config.images.poster_sizes[1] + movie.poster_path}

          />
        </li>
      )}

    </div >
  );
}


{/* img={config.images.base_url + config.images.backdrop_sizes[0] + movie.backdrop_path}
  img="https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
  
  https://api.themoviedb.org/3/configuration?api_key=57359ff087905e870d40ba4880a1dce0


  https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0 */ }


export default Home;
