import express from 'express';
import { appDataSource } from '../datasource.js';
import Movie from '../entities/movies.js';

const router = express.Router();

router.get('/', function (req, res) {
    appDataSource
    .getRepository(Movie)
    .find({})
    .then(function (movies) {
      res.json({ movies: movies });
    });
});

router.post('/new', function (req, res) {
    const movieRepository = appDataSource.getRepository(Movie);
    // const newMovie = movieRepository.create({
    //     title: req.body.title,
    //     date: req.body.date,
    // });

    const {
      title,
      release_date,
      adult,
      backdrop_path = "/default-backdrop.jpg",
      genre_ids = [],
      original_language = "en",
      original_title = title,
      overview = "No overview available.",
      popularity = 0.0,
      poster_path = "/default-poster.jpg",
      video = false,
      vote_average = 0.0,
      vote_count = 0
    } = req.body;

    const newMovie = movieRepository.create({
      title,
      release_date,
      adult,
      backdrop_path,
      genre_ids,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      video,
      vote_average,
      vote_count,
    });

    movieRepository
        .insert(newMovie)
        .then(function () { res.json({message : `Movie with title "${newMovie.title}" successfully added`});})
        .catch(function (error) {
            console.error(error);
            if (error.code === '23505') {
                res.status(409).json({
                    message: `Movie with title "${newMovie.title}" already exists`,
                });
            } else {
                res.status(500).json({ message: 'Error while creating the movie' });
            }
        });
});

router.delete('/:movieId', function (req, res) {
    appDataSource
      .getRepository(Movie)
      .delete({ id: req.params.movieId })
      .then(function () {
        res.status(200).json({ message: `Movie with id ${req.params.movieId} successfully deleted` });
      })
      .catch(function () {
        res.status(500).json({ message: 'Error while deleting the movie' });
      });
  });


export default router;
