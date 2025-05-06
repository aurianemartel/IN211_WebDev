import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Movie from '../../components/Movie/Movie';
import { Router } from 'react-router-dom';
import { useNavigate } from "react-router";

const img_url = "http://image.tmdb.org/t/p/w154"

// const useFetchConfig = () => {
//   const [config, setConfig] = useState({});

//   useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/configuration?api_key=57359ff087905e870d40ba4880a1dce0`)
//       .then((response) => {
//         // If call succeeded
//         console.log("response : config data", response.data.images);
//         setConfig(response.data.images);
//         console.log("config", config);
//       })
//       .catch((error) => {
//         // If call failed
//         console.error('An error occured while fetching the configuration:' + error);
//       });
//   }, []);

//   return { config };
// };


const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0`)
      .then((response) => {
        // If call succeeded
        //console.log("response : movies", response.data.results)
        setMovies(response.data.results);
        console.log("movies :", movies);
      })
      .catch((error) => {
        // If call failed
        console.error('An error occured while fetching movies' + error);
      });
  }, []);

  return { movies };
};

function Home() {
  const [movieName, setMovieName] = useState("");
  const { movies } = useFetchMovies();
  //const { config } = useFetchConfig();


  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <title> Page d'accueil </title>


        <h1> Films disponibles </h1>

        <button onClick={() => navigate("/add-movie")}>Add Movie</button>

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
            img={img_url + movie.poster_path}

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
