import express from 'express';
import { appDataSource } from '../datasource.js';
import Movie from '../entities/movies.js';

const router = express.Router();

router.get('/', function (req, res) {
    console.log("Current : get api/movies");
    res.json(null);
});

router.post('/new', function (req, res) {
    const movieRepository = appDataSource.getRepository(Movie);
    const newMovie = movieRepository.create({
    title: req.body.title,
    date: req.body.date,
  });

  movieRepository
    .insert(newMovie)
    .then(function () {
        res.json({message : "Film enregistré"});
      })

});


export default router;
