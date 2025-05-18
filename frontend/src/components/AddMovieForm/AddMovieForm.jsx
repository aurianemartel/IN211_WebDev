import { useState } from 'react';
import axios from 'axios';
import './AddMovieForm.css';

// const DEFAULT_FORM_VALUES = {
//     title: '',
//     date: '',
// };

const DEFAULT_FORM_VALUES = {
  title: "",
  release_date: "",            // string (e.g. "2025-03-31")
  adult: false,                // boolean
  backdrop_path: null,         // nullable string
  genre_ids: "",               // simple-array stored as comma-separated string
  original_language: "",       // string (varchar)
  original_title: "",          // string (varchar)
  overview: null,              // nullable text
  popularity: 0.0,             // float
  poster_path: null,           // nullable string
  video: false,                // boolean
  vote_average: 0.0,           // float
  vote_count: 0,               // int
};

const useSaveMovie = () => {
    const [movieCreationError, setMovieCreationError] = useState(null);
    const [movieCreationSuccess, setMovieCreationSuccess] = useState(null);
    const displayCreationSuccessMessage = () => {
        setMovieCreationSuccess('New movie created successfully');
        setTimeout(() => {
            setMovieCreationSuccess(null);
        }, 3000);
    };

    const saveMovie = (event, formValues, setFormValues) => {
        // This avoid page reload
        event.preventDefault();

        setMovieCreationError(null);
        if (formValues.title === '') {
            console.error('Missing name, this field is required');
            return;
        }

        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/movies/new`, formValues)
            .then(() => {
                displayCreationSuccessMessage();
                setFormValues(DEFAULT_FORM_VALUES);
            })
            .catch((error) => {
                setMovieCreationError('An error occured while creating new movie.');
                console.error(error);
            });
    };

    return { saveMovie, movieCreationError, movieCreationSuccess };
};

// function AddMovieForm() {
//     const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
//     const { saveMovie, movieCreationError, movieCreationSuccess } = useSaveMovie();

//     return (
//         <div>
//             <form
//                 className="add-movie-form"
//                 onSubmit={(event) => saveMovie(event, formValues, setFormValues)}
//             >
//                 <input
//                     className="add-movie-input"
//                     placeholder="Titre"
//                     value={formValues.title}
//                     onChange={(event) =>
//                         setFormValues({ ...formValues, title: event.target.value })
//                     }
//                 />
//                 <input
//                     className="add-movie-input"
//                     type="date"
//                     placeholder="Release date"
//                     value={formValues.date}
//                     onChange={(event) =>
//                         setFormValues({ ...formValues, date: event.target.value })
//                     }
//                 />
//                 <button className="add-movie-button" type="submit">
//                     Add movie
//                 </button>
//             </form>
//             {movieCreationSuccess !== null && (
//                 <div className="movie-creation-success">{movieCreationSuccess}</div>
//             )}
//             {movieCreationError !== null && (
//                 <div className="movie-creation-error">{movieCreationError}</div>
//             )}
//         </div>
//     );
// }




function AddMovieForm() {
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  const { saveMovie, movieCreationError, movieCreationSuccess } = useSaveMovie();

  return (
    <div>
      <form
        className="add-movie-form"
        onSubmit={(event) => saveMovie(event, formValues, setFormValues)}
      >
        <input
          className="add-movie-input"
          placeholder="Titre"
          value={formValues.title}
          onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}
          required
        />

        <input
          className="add-movie-input"
          type="date"
          placeholder="Release date"
          value={formValues.release_date}
          onChange={(e) => setFormValues({ ...formValues, release_date: e.target.value })}
          required
        />

        <label>
          Adult:
          <input
            type="checkbox"
            checked={formValues.adult}
            onChange={(e) => setFormValues({ ...formValues, adult: e.target.checked })}
          />
        </label>

        <input
          className="add-movie-input"
          placeholder="Backdrop path"
          value={formValues.backdrop_path || ""}
          onChange={(e) => setFormValues({ ...formValues, backdrop_path: e.target.value || null })}
        />

        <input
          className="add-movie-input"
          placeholder="Genre IDs (comma separated)"
          value={formValues.genre_ids}
          onChange={(e) => setFormValues({ ...formValues, genre_ids: e.target.value })}
        />

        <input
          className="add-movie-input"
          placeholder="Original language"
          value={formValues.original_language}
          onChange={(e) => setFormValues({ ...formValues, original_language: e.target.value })}
          required
        />

        <input
          className="add-movie-input"
          placeholder="Original title"
          value={formValues.original_title}
          onChange={(e) => setFormValues({ ...formValues, original_title: e.target.value })}
          required
        />

        <textarea
          className="add-movie-input"
          placeholder="Overview"
          value={formValues.overview || ""}
          onChange={(e) => setFormValues({ ...formValues, overview: e.target.value || null })}
        />

        <input
          className="add-movie-input"
          type="number"
          step="0.01"
          placeholder="Popularity"
          value={formValues.popularity}
          onChange={(e) => setFormValues({ ...formValues, popularity: parseFloat(e.target.value) || 0 })}
        />

        <input
          className="add-movie-input"
          placeholder="Poster path"
          value={formValues.poster_path || ""}
          onChange={(e) => setFormValues({ ...formValues, poster_path: e.target.value || null })}
        />

        <label>
          Video:
          <input
            type="checkbox"
            checked={formValues.video}
            onChange={(e) => setFormValues({ ...formValues, video: e.target.checked })}
          />
        </label>

        <input
          className="add-movie-input"
          type="number"
          step="0.01"
          placeholder="Vote average"
          value={formValues.vote_average}
          onChange={(e) => setFormValues({ ...formValues, vote_average: parseFloat(e.target.value) || 0 })}
        />

        <input
          className="add-movie-input"
          type="number"
          placeholder="Vote count"
          value={formValues.vote_count}
          onChange={(e) => setFormValues({ ...formValues, vote_count: parseInt(e.target.value) || 0 })}
        />

        <button className="add-movie-button" type="submit">
          Add movie
        </button>
      </form>

      {movieCreationSuccess && <div className="movie-creation-success">{movieCreationSuccess}</div>}
      {movieCreationError && <div className="movie-creation-error">{movieCreationError}</div>}
    </div>
  );
}

export default AddMovieForm;
