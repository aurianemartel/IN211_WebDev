import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';



function Home() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0`)
      .then((response) => {
        // Do something if call succeeded
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch((error) => {
        // Do something if call failed
        console.log(error)
      });
  }, []);

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

        <p> Résultats pour "{movieName}" </p>




      </header>
    </div >
  );
}


{/*https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0*/ }

export default Home;
