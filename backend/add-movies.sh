#!/bin/bash

echo "Ajout de films en cours..."

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"The Matrix","date":"1999-03-31"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Inception","date":"2010-07-16"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Interstellar","date":"2014-11-07"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"The Dark Knight","date":"2008-07-18"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Fight Club","date":"1999-10-15"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Pulp Fiction","date":"1994-10-14"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Forrest Gump","date":"1994-07-06"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Gladiator","date":"2000-05-05"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"The Shawshank Redemption","date":"1994-09-23"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"The Lord of the Rings: The Fellowship of the Ring","date":"2001-12-19"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Whiplash","date":"2014-10-10"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Parasite","date":"2019-05-30"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Joker","date":"2019-10-04"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Her","date":"2013-12-18"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"The Social Network","date":"2010-10-01"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Mad Max: Fury Road","date":"2015-05-15"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"La La Land","date":"2016-12-09"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Arrival","date":"2016-11-11"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"The Grand Budapest Hotel","date":"2014-03-28"}'

curl -X POST http://localhost:8080/api/movies/new \
-H "Content-Type: application/json" \
-d '{"title":"Dune","date":"2021-10-22"}'

echo "Tous les films ont été ajoutés"