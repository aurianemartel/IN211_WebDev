import { useState } from 'react';
import axios from 'axios';
import './AddMovieForm.css';

const DEFAULT_FORM_VALUES = {
    name: '',
    date: '',
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
        if (formValues.name === '') {
            console.error('Missing name, this field is required');
            return;
        }

        axios
            .post(`${import.meta.env.VITE_BACKDEND_URL}/api/movies/new`, formValues)
            .then(() => {
                displayCreationSuccessMessage();
                setFormValues(DEFAULT_FORM_VALUES);
            })
            .catch((error) => {
                setMovieCreationError('An error occured while creating new user.');
                console.error(error);
            });
    };

    return { saveMovie, movieCreationError, movieCreationSuccess };
};

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
                    placeholder="Name"
                    value={formValues.name}
                    onChange={(event) =>
                        setFormValues({ ...formValues, name: event.target.value })
                    }
                />
                <input
                    className="add-movie-input"
                    type="date"
                    placeholder="Release date"
                    value={formValues.date}
                    onChange={(event) =>
                        setFormValues({ ...formValues, date: event.target.value })
                    }
                />
                <button className="add-movie-button" type="submit">
                    Add movie
                </button>
            </form>
            {movieCreationSuccess !== null && (
                <div className="movie-creation-success">{movieCreationSuccess}</div>
            )}
            {movieCreationError !== null && (
                <div className="movie-creation-error">{movieCreationError}</div>
            )}
        </div>
    );
}

export default AddMovieForm;
