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

// const useFetchMovies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0`)
//       .then((response) => {
//         // If call succeeded
//         //console.log("response : movies", response.data.results)
//         setMovies(response.data.results);
//         console.log("movies :", movies);
//       })
//       .catch((error) => {
//         // If call failed
//         console.error('An error occured while fetching movies' + error);
//       });
//   }, []);

//   return { movies };
// };

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/movies`)
      .then((response) => {
        // If call succeeded
        // console.log("response : movies", response)
        setMovies(response.data.movies);
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
  const [searchValue, setSearchValue] = useState("");
  const [selectedSortOption, setselectedSortOption] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const { movies: fetchedMovies } = useFetchMovies();
  const [movies, setMovies] = useState([]);

  //const { config } = useFetchConfig();

  useEffect(() => {
    // Initialize with fetched movies (or filtered and sorted)
    setMovies(fetchedMovies || []);
    console.log("Movies are:", movies)
  }, [fetchedMovies]);

  const navigate = useNavigate();

  const sortedMovies = (option, movies) => {
    console.log("Sorting movies...", movies)
    console.log(option)

    const sorted_movies = movies.sort((a, b) => {
      if (option === "title") {
        const criteriaA = a.title.toLowerCase();
        const criteriaB = b.title.toLowerCase();
        if (criteriaA < criteriaB) return -1;
        if (criteriaA > criteriaB) return 1;
        return 0;
      } else if (option === "oldest_first") {
        const criteriaA = a.release_date.toLowerCase();
        const criteriaB  = b.release_date.toLowerCase();
        if (criteriaA < criteriaB ) return -1;
        if (criteriaA > criteriaB ) return 1;
        return 0;
      } else if (option === "youngest_first") {
        const criteriaA = a.release_date.toLowerCase();
        const criteriaB  = b.release_date.toLowerCase();
        if (criteriaA > criteriaB ) return -1;
        if (criteriaA < criteriaB ) return 1;
        return 0;
      } else if (option === "most_popular_first") {
        const criteriaA = a.popularity;
        const criteriaB  = b.popularity;
        if (criteriaA > criteriaB ) return -1;
        if (criteriaA < criteriaB ) return 1;
        return 0;
      } else if (option === "best_voted_first") {
        const criteriaA = a.vote_average;
        const criteriaB  = b.vote_average;
        if (criteriaA > criteriaB ) return -1;
        if (criteriaA < criteriaB ) return 1;
        return 0;
      }
    })

    return sorted_movies
  }

  const filteredMovies = (option, localSearchValue, movies) => {
    console.log("Filtering movies...", option, localSearchValue)

    const filtered_movies = movies.filter((m) => {
      if (option === "") {
        return true
      } 
      if (option === "more-votes") {
        const votes = localSearchValue
        return (m.vote_count >= +votes)
      }
      if (option === "title") {
        return m.title.includes(localSearchValue)
      }
      if (option === "is-adult") {
        return m.adult 
      }
      if (option === "original-language") {
        return m.original_language == localSearchValue
      }
    })

    return filtered_movies
  }

  const sortFilterMovies = (sortOption, filterOption, searchValue) => {
    const filtered_movies = filteredMovies(filterOption, searchValue, fetchedMovies)
    const sorted_movies = sortedMovies(sortOption, filtered_movies)
    setMovies(sorted_movies)
  }

  return (
    <div className="App">
      <header className="App-header">
        <title> Page d'accueil </title>


        <h1> Films disponibles </h1>

        <button onClick={() => navigate("/add-movie")}>Add Movie</button>

        <div>

          <label className="Filter-and-sort" htmlFor="filter">Filter par: </label>
          <select id="filter-by" value={selectedFilter} 
              onChange={(event) => {
                setSelectedFilter(event.target.value)
                sortFilterMovies(selectedSortOption, event.target.value, searchValue)
              }
              }>
            <option value="">-- Select --</option>
            <option value="title">Titre</option>
            <option value="more-votes">Nombre de votes</option>
            <option value="is-adult">Films pour adultes</option>
            <option value="original-language">Langue originale (en, fr...)</option>
          </select>
          <input
              type="text"
              id="Filter input"
              name="Filter"
              placeholder="Critère de recherche..."
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value)
                sortFilterMovies(selectedSortOption, selectedFilter, event.target.value)
              }}
          />

          <label className="Filter-and-sort" htmlFor="sort-by">Trier par: </label>
          <select id="sort-by" value={selectedSortOption} 
              onChange={(event) => {
                setselectedSortOption(event.target.value)
                sortFilterMovies(event.target.value, selectedFilter, searchValue)
              }
              }>
            <option value="">-- Select --</option>
            <option value="title">Titre</option>
            <option value="oldest_first">Plus anciens d'abord</option>
            <option value="youngest_first">Plus récents d'abord</option>
            <option value="most_popular_first">Plus tendance</option>
            <option value="best_voted_first">Meilleurs votes</option>
          </select>
        </div>

      </header>

      <h2> Nombre de films: {movies.length} </h2>

      <h2> Films populaires </h2>

      <div className="App-moviegrid">
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
      </div>


    </div >
  );
}


{/* img={config.images.base_url + config.images.backdrop_sizes[0] + movie.backdrop_path}
  img="https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
  
  https://api.themoviedb.org/3/configuration?api_key=57359ff087905e870d40ba4880a1dce0


  https://api.themoviedb.org/3/movie/popular?api_key=57359ff087905e870d40ba4880a1dce0 */ }


export default Home;
