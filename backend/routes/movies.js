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
    const newMovie = movieRepository.create({
        title: req.body.title,
        date: req.body.date,
    });

    movieRepository
        .insert(newMovie)
        .then(function () { res.json({message : "Movie successfully added"});})
        .catch(function () {
            if (error.code === '23505') {
                res.status(400).json({
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
        res.status(200).json({ message: 'Movie successfully deleted' });
      })
      .catch(function () {
        res.status(500).json({ message: 'Error while deleting the movie' });
      });
  });


export default router;
