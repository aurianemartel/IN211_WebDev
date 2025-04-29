#!/bin/bash

if [ $# = 2 ]
then
    curl -X POST http://localhost:8080/api/movies/new \
    -H "Content-Type: application/json" \
    -d "{\"title\":\"$1\",\"date\":\"$2\"}"
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
        curl -X POST http://localhost:8080/api/movies/new \
        -H "Content-Type: application/json" \
        -d "{\"title\":\"$name\",\"date\":\"$date\"}"
        echo
    done
fi