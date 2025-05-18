#!/bin/bash

URL=https://in211-auriane.vercel.app

if [ $# = 2 ]
then
    curl -X POST $URL/api/movies/new \
    -H "Content-Type: application/json" \
    # -d "{\"title\":\"$1\",\"release_date\":\"$2\"}"
    -d '{
    "title": "'"$1"'",
    "release_date": "'"$2"'",
    "adult": false,
    "backdrop_path": "/default-backdrop.jpg",
    "genre_ids": [18],
    "original_language": "en",
    "original_title": "'"$1"'",
    "overview": "No overview available.",
    "popularity": 0.0,
    "poster_path": "/default-poster.jpg",
    "video": false,
    "vote_average": 0.0,
    "vote_count": 0
  }'
    echo

else
    echo "Ajout de films en cours..."

    names=( "The Matrix" "Inception" "Interstellar" "The Dark Knight" "Fight Club" "Pulp Fiction" \
    "Forrest Gump" "Gladiator" "The Shawshank Redemption" \
    "The Lord of the Rings: The Fellowship of the Ring" "Whiplash" "Parasite" "Joker" "Her" \
    "The Social Network" "Mad Max: Fury Road" "La La Land" "Arrival" "The Grand Budapest Hotel" \
    "Dune")
    dates=( "1999-03-31" "2010-07-16" "2014-11-07" "2008-07-18" "1999-10-15" "1994-10-14" "1994-07-06" \
    "2000-05-05" "1994-09-23" "2001-12-19" "2014-10-10" "2019-05-30" "2019-10-04" "2013-12-18" \
    "2010-10-01" "2015-05-15" "2016-12-09" "2016-11-11" "2014-03-28" "2021-10-22" )

    for idx in "${!names[@]}"; do
        name=${names[$idx]}
        date=${dates[$idx]}
        curl -X POST $URL/api/movies/new \
        -H "Content-Type: application/json" \
        # -d "{\"title\":\"$name\",\"release_date\":\"$date\"}"
         -d '{
    "title": "'"$name"'",
    "release_date": "'"$date"'",
    "adult": false,
    "backdrop_path": "/default-backdrop.jpg",
    "genre_ids": [18],
    "original_language": "en",
    "original_title": "'"$name"'",
    "overview": "No overview available.",
    "popularity": 0.0,
    "poster_path": "/default-poster.jpg",
    "video": false,
    "vote_average": 0.0,
    "vote_count": 0
  }'
        echo
    done
fi