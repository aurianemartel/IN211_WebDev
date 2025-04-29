import './AddMovie.css';
import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';

function AddMovie() {
    return (
        <div className="Movie-container">
            <h1>You can add a movie here</h1>
            <AddMovieForm />
        </div>
    );
}

export default AddMovie;