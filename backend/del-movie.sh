#!/bin/bash

arg="$1"

if [ "$arg" == "all" ]; then
  # Delete all movies
  ids=$(curl -s http://localhost:8080/api/movies/ | jq -r '.movies[].id')
  
  for id in $ids; do
    echo "Deleting movie with id: $id"
    curl -s -X DELETE http://localhost:8080/api/movies/$id
    echo
  done

elif [ -n "$arg" ]; then
  # Delete only the first movie with the given title
  id=$(curl -s http://localhost:8080/api/movies/ | \
  jq -r --arg title "$arg" '.movies[] | select(.title == $title) | .id' | head -n 1)
  
  if [ -n "$id" ]; then
    echo "Deleting movie with title: $arg (id: $id)"
    curl -s -X DELETE http://localhost:8080/api/movies/$id
    echo
  else
    echo "No movie found with title: $arg"
  fi

else
  echo "Usage:"
  echo "  $0 all           # Delete all movies"
  echo "  $0 \"Movie Title\"  # Delete one movie by title"
fi
